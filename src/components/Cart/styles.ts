import styled from 'styled-components';

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 999;
`;

export const Sidebar = styled.aside`
    position: fixed;
    top: 0;
    right: 0;
    width: 360px;
    height: 100%;
    background-color: #E66767;
    color: #fff;
    padding: 24px;
    box-shadow: -4px 0 10px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;

    h3 {
        font-size: 18px;
        font-weight: bold;
    }

    ul {
        list-style: none;
        padding: 0;
        flex-grow: 1;
    }

    p {
        text-align: center;
        margin-top: 32px;
    }
`;

export const SidebarHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
`;

export const CloseButton = styled.button`
    background: none;
    border: none;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
`;

export const CartItemCard = styled.li`
    background-color: #fff;
    color: #E66767;
    display: flex;
    align-items: center;
    padding: 8px;
    border-radius: 8px;
    margin-bottom: 16px;
    position: relative;
`;

export const CartItemImage = styled.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 4px;
`;

export const CartItemInfo = styled.div`
    flex-grow: 1;
    margin-left: 8px;
`;

export const CartItemTitle = styled.h4`
    font-size: 16px;
    font-weight: bold;
    margin: 0;
`;

export const CartItemPrice = styled.span`
    display: block;
    font-size: 14px;
    margin-top: 8px;
`;

export const RemoveButton = styled.button`
    position: absolute;
    bottom: 8px;
    right: 8px;
    background: none;
    border: none;
    color: #E66767;
    font-size: 20px;
    cursor: pointer;
`;

export const TotalValue = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    font-weight: bold;
    margin-top: 16px;
    margin-bottom: 24px;
`;

export const ConfirmButton = styled.button`
    width: 100%;
    padding: 8px;
    background-color: #fff;
    color: #E66767;
    font-weight: bold;
    border: none;
    cursor: pointer;
    text-align: center;
`;