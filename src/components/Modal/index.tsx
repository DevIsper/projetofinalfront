import React from 'react';
import { Overlay, ModalContent, CloseButton } from './styles';
import type { PratosCardProps } from '../PratosCard';

type Props = {
    prato: PratosCardProps;
    onClose: () => void;
}

const Modal: React.FC<Props> = ({ prato, onClose }) => {

    const handleAddClick = () => {
        // Implemente a lógica de adicionar ao carrinho aqui
        alert(`Adicionado "${prato.title}" ao carrinho!`);
        onClose();
    };

    return (
        <Overlay onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <img src={prato.image} alt={prato.title} />
                <div>
                    <h4>{prato.title}</h4>
                    <p>{prato.description}</p>
                    <p>Serve: 2 a 3 pessoas</p>
                    <button onClick={handleAddClick}>Adicionar ao carrinho</button>
                </div>
                <CloseButton onClick={onClose}>&times;</CloseButton>
            </ModalContent>
        </Overlay>
    );
};

export default Modal;