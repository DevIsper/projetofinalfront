import React, { useState } from 'react';
import {
    Form,
    InputGroup,
    Input,
    ButtonContainer,
    ConfirmButton,
    BackButton
} from './styles';

type DeliveryProps = {
    onBackToCart: () => void;
    onContinue: () => void;
};

const Delivery: React.FC<DeliveryProps> = ({ onBackToCart, onContinue }) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [number, setNumber] = useState('');
    const [complement, setComplement] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Você pode adicionar a lógica para salvar os dados aqui
        console.log('Dados da entrega:', { name, address, city, zip, number, complement });
        onContinue(); // Chama a próxima etapa (pagamento)
    };

    return (
        <>
            <h3>Entrega</h3>
            <Form onSubmit={handleSubmit}>
                <h4>Quem irá receber</h4>
                <InputGroup>
                    <Input
                        type="text"
                        placeholder="Nome completo"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </InputGroup>

                <h4>Endereço</h4>
                <InputGroup>
                    <Input
                        type="text"
                        placeholder="Endereço"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </InputGroup>
                <InputGroup isTwoColumns>
                    <Input
                        type="text"
                        placeholder="Cidade"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                    />
                </InputGroup>
                <InputGroup isTwoColumns>
                    <Input
                        type="text"
                        placeholder="CEP"
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                        required
                    />
                    <Input
                        type="text"
                        placeholder="Número"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        required
                    />
                </InputGroup>
                <InputGroup>
                    <Input
                        type="text"
                        placeholder="Complemento (opcional)"
                        value={complement}
                        onChange={(e) => setComplement(e.target.value)}
                    />
                </InputGroup>

                <ButtonContainer>
                    <ConfirmButton type="submit">Continuar com o pagamento</ConfirmButton>
                    <BackButton type="button" onClick={onBackToCart}>Voltar para o carrinho</BackButton>
                </ButtonContainer>
            </Form>
        </>
    );
};

export default Delivery;