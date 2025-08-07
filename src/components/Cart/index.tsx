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
import type {RootState} from '../../store';
import { removeFromCart } from '../../store/reducers/cartSlice';
import Delivery from '../Delivery'; // 👈 Importa o novo componente

type CartProps = {
    isOpen: boolean;
    onClose: () => void;
};

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const [step, setStep] = useState<'cart' | 'delivery'>('cart'); // 👈 Novo estado para gerenciar a etapa

    const handleRemoveFromCart = (id: number) => {
        dispatch(removeFromCart(id));
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
                    <ConfirmButton onClick={() => setStep('delivery')}>Continuar com a entrega</ConfirmButton>
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
                onContinue={() => console.log('Próxima etapa: Pagamento')} // Você pode criar um novo estado para isso
            />
        </>
    );

    if (!isOpen) return null;

    return (
        <Overlay onClick={onClose}>
            <Sidebar onClick={e => e.stopPropagation()}>
                {step === 'cart' && renderCartItems()}
                {step === 'delivery' && renderDeliveryForm()}
            </Sidebar>
        </Overlay>
    );
};

export default Cart;