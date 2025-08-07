import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Overlay,
    Sidebar,
    SidebarHeader,
    CloseButton,
    CartItemCard,
    CartItemImage,
    CartItemInfo,
    CartItemTitle,
    CartItemPrice,
    RemoveButton,
    TotalValue,
    ConfirmButton,
} from './styles';
import type { RootState } from '../../store';
import { removeFromCart } from '../../store/reducers/cartSlice';
import Delivery from '../Delivery';
import Payment from '../Payment';
import Confirmation from '../Confirmation'; // Importa o componente de confirmação

type CartProps = {
    isOpen: boolean;
    onClose: () => void;
};

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    const [step, setStep] = useState<'cart' | 'delivery' | 'payment' | 'confirmation'>('cart');
    const [deliveryInfo, setDeliveryInfo] = useState<any>(null);
    const [orderId, setOrderId] = useState<string>('');

    const handleRemoveFromCart = (id: number) => {
        dispatch(removeFromCart(id));
    };

    const handleDeliveryContinue = (deliveryData: any) => {
        setDeliveryInfo(deliveryData);
        setStep('payment');
    };

    const handlePaymentSuccess = (id: string) => {
        setOrderId(id);
        setStep('confirmation');
    };

    const handleConfirmationClose = () => {
        onClose();
        setStep('cart');
    };

    const totalValue = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const renderCartItems = () => (
        <>
            <SidebarHeader>
                <h3>Carrinho</h3>
                <CloseButton onClick={onClose}>&times;</CloseButton>
            </SidebarHeader>
            {cartItems.length > 0 ? (
                <>
                    <ul>
                        {cartItems.map(item => (
                            <CartItemCard key={item.id}>
                                <CartItemImage src={item.image} alt={item.title} />
                                <CartItemInfo>
                                    <CartItemTitle>{item.title}</CartItemTitle>
                                    <CartItemPrice>R$ {item.price.toFixed(2)}</CartItemPrice>
                                </CartItemInfo>
                                <RemoveButton onClick={() => handleRemoveFromCart(item.id)}>
                                    &times;
                                </RemoveButton>
                            </CartItemCard>
                        ))}
                    </ul>
                    <TotalValue>
                        <span>Valor total</span>
                        <span>R$ {totalValue.toFixed(2)}</span>
                    </TotalValue>
                    <ConfirmButton onClick={() => setStep('delivery')}>
                        Continuar com a entrega
                    </ConfirmButton>
                </>
            ) : (
                <p>O carrinho está vazio.</p>
            )}
        </>
    );

    const renderDeliveryForm = () => (
        <>
            <SidebarHeader>
                <h3>Entrega</h3>
                <CloseButton onClick={onClose}>&times;</CloseButton>
            </SidebarHeader>
            <Delivery
                onBackToCart={() => setStep('cart')}
                onContinue={handleDeliveryContinue}
            />
        </>
    );

    const renderPaymentForm = () => (
        <>
            <SidebarHeader>
                <h3>Pagamento</h3>
                <CloseButton onClick={onClose}>&times;</CloseButton>
            </SidebarHeader>
            <Payment
                onBackToDelivery={() => setStep('delivery')}
                onPaymentSuccess={handlePaymentSuccess}
                deliveryInfo={deliveryInfo}
            />
        </>
    );

    const renderConfirmation = () => (
        <>
            <SidebarHeader>
                <h3>Confirmação</h3>
                <CloseButton onClick={handleConfirmationClose}>&times;</CloseButton>
            </SidebarHeader>

            <Confirmation orderId={orderId} onClose={handleConfirmationClose} />
        </>
    );

    if (!isOpen) return null;

    return (
        <Overlay onClick={onClose}>
            <Sidebar onClick={e => e.stopPropagation()}>
                {step === 'cart' && renderCartItems()}
                {step === 'delivery' && renderDeliveryForm()}
                {step === 'payment' && renderPaymentForm()}
                {step === 'confirmation' && renderConfirmation()}
            </Sidebar>
        </Overlay>
    );
};

export default Cart;