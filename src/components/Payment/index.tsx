import React, { useState } from 'react';
import {
    Form,
    InputGroup,
    Input,
    ButtonContainer,
    ConfirmButton,
    BackButton
} from './styles';
import { useDispatch, useSelector } from 'react-redux';
import type {RootState} from '../../store';
import { clearCart } from '../../store/reducers/cartSlice';

type PaymentProps = {
    onBackToDelivery: () => void;
    onPaymentSuccess: (orderId: string) => void;
    deliveryInfo: { // Tipagem para o objeto de entrega
        name: string;
        address: string;
        city: string;
        zip: string;
        number: string;
        complement: string;
    } | null;
};

const Payment: React.FC<PaymentProps> = ({ onBackToDelivery, onPaymentSuccess, deliveryInfo }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const totalValue = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const [cardName, setCardName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cvv, setCvv] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Verifica se as informações de entrega existem antes de continuar
        if (!deliveryInfo) {
            alert("Informações de entrega não encontradas. Por favor, volte e preencha o formulário.");
            return;
        }

        setIsProcessing(true);

        const orderPayload = {
            products: cartItems.map(item => ({
                id: item.id,
                price: item.price
            })),
            delivery: {
                receiver: deliveryInfo.name,
                address: {
                    description: deliveryInfo.address,
                    city: deliveryInfo.city,
                    zipCode: deliveryInfo.zip,
                    number: Number(deliveryInfo.number),
                    complement: deliveryInfo.complement
                }
            },
            payment: {
                card: {
                    name: cardName,
                    number: cardNumber,
                    code: Number(cvv),
                    expires: {
                        month: Number(month),
                        year: Number(year)
                    }
                }
            }
        };

        try {
            const response = await fetch('https://ebac-fake-api.vercel.app/api/efood/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderPayload),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Pedido enviado com sucesso:', data);
                dispatch(clearCart());
                onPaymentSuccess(data.orderId);
            } else {
                console.error('Erro ao processar o pagamento:', response.statusText);
                alert('Ocorreu um erro ao processar o pagamento. Por favor, tente novamente.');
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
            alert('Ocorreu um erro na requisição. Verifique sua conexão.');
        } finally {
            setIsProcessing(false);
        }
    };

    // ... (restante do código)

    return (
        <>
            <h3>Pagamento - Valor a pagar R$ {totalValue.toFixed(2)}</h3>
            <Form onSubmit={handleSubmit}>
                <h4>Nome no cartão</h4>
                <InputGroup>
                    <Input
                        type="text"
                        placeholder="Nome no cartão"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        required
                    />
                </InputGroup>
                <h4>Número do cartão</h4>
                <InputGroup isTwoColumns>
                    <Input
                        type="text"
                        placeholder="Número do cartão"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        required
                    />
                    <Input
                        type="text"
                        placeholder="CVV"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        required
                    />
                </InputGroup>

                <h4>Data de vencimento</h4>
                <InputGroup isTwoColumns>
                    <Input
                        type="text"
                        placeholder="Mês de vencimento"
                        value={month}
                        onChange={(e) => setMonth(e.target.value)}
                        required
                    />
                    <Input
                        type="text"
                        placeholder="Ano de vencimento"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        required
                    />
                </InputGroup>

                <ButtonContainer>
                    <ConfirmButton type="submit" disabled={isProcessing}>
                        {isProcessing ? 'Processando...' : 'Finalizar pagamento'}
                    </ConfirmButton>
                    <BackButton type="button" onClick={onBackToDelivery}>
                        Voltar para a seleção de endereço
                    </BackButton>
                </ButtonContainer>
            </Form>
        </>
    );
};

export default Payment;