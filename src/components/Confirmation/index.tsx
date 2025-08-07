import React from 'react';
import {
    MessageContainer,
    MessageTitle,
    MessageText,
    ConfirmButton,
} from './styles';

type ConfirmationProps = {
    orderId: string;
    onClose: () => void;
};

const Confirmation: React.FC<ConfirmationProps> = ({ orderId, onClose }) => {
    return (
        <MessageContainer>
            <MessageTitle>Pedido realizado - {orderId}</MessageTitle>
            <MessageText>
                Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
            </MessageText>
            <MessageText>
                Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.
            </MessageText>
            <MessageText>
                Lembre-se da importância de higienizar as mãos após o recebimento do pedido, utilizando álcool em gel, para sua segurança e bem-estar durante a refeição.
            </MessageText>
            <MessageText>
                Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
            </MessageText>
            <ConfirmButton onClick={onClose}>Concluir</ConfirmButton>
        </MessageContainer>
    );
};

export default Confirmation;