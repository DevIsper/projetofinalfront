import styled from 'styled-components';

export const Form = styled.form`
    color: #fff;

    h3 {
        margin-bottom: 16px;
    }

    h4 {
        font-size: 14px;
        font-weight: bold;
        margin-top: 24px;
        margin-bottom: 8px;
    }
`;

export const InputGroup = styled.div<{ isTwoColumns?: boolean }>`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;

    ${(props) => props.isTwoColumns && `
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
    `}
`;

export const Input = styled.input`
    width: 100%;
    height: 32px;
    padding: 8px;
    background-color: #fff;
    border: none;
    font-size: 14px;
`;

export const ButtonContainer = styled.div`
    margin-top: 24px;
`;

const BaseButton = styled.button`
    width: 100%;
    padding: 8px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    text-align: center;
`;

export const ConfirmButton = styled(BaseButton)`
    background-color: #fff;
    color: #E66767;
    margin-bottom: 8px;
`;

export const BackButton = styled(BaseButton)`
    background-color: rgba(255, 255, 255, 0.2);
    color: #fff;
`;