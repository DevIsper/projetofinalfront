import React from 'react';
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

type CartProps = {
    isOpen: boolean;
    onClose: () => void;
};

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    const handleRemoveFromCart = (id: number) => {
        dispatch(removeFromCart(id));
    };

    const totalValue = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    if (!isOpen) return null;

    return (
        <Overlay onClick={onClose}>
            <Sidebar onClick={e => e.stopPropagation()}>
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
                        <ConfirmButton>Continuar com a entrega</ConfirmButton>
                    </>
                ) : (
                    <p>O carrinho está vazio.</p>
                )}
            </Sidebar>
        </Overlay>
    );
};

export default Cart;