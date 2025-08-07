// src/components/Modal/index.tsx

import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/reducers/cartSlice'; // Importe a ação
import { Overlay, ModalContent, CloseButton } from './styles';
import type {Prato} from "../../types/types.ts";

type Props = {
    prato: Prato;
    onClose: () => void;
}

const Modal: React.FC<Props> = ({ prato, onClose }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        const itemToAdd = {
            id: prato.id,
            title: prato.nome,
            image: prato.foto,
            description: prato.descricao,
            price: prato.preco,
            quantity: 1,
        };
        dispatch(addToCart(itemToAdd));
        alert(`${prato.nome} adicionado ao carrinho!`);
        onClose();
    };

    return (
        <Overlay onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <img src={prato.foto} alt={prato.nome} />
                <div>
                    <h4>{prato.nome}</h4>
                    <p>{prato.descricao}</p>
                    <p>Serve de {prato.porcao}</p>
                    <button onClick={handleAddToCart}>Adicionar ao carrinho - R$ {prato.preco}</button>
                </div>
                <CloseButton onClick={onClose}>&times;</CloseButton>
            </ModalContent>
        </Overlay>
    );
};

export default Modal;