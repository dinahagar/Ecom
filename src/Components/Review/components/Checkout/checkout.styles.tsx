import { Badge, Space } from "antd";
import { styled } from "styled-components";

export const CheckoutSection = styled.div`
    margin-top: 10px;
`

export const CheckImgDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const CheckoutPrice = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 8px;
    flex-wrap: wrap;
    justify-content: end;
`

export const CongratsP = styled.p`
    color: #0AA288;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.06px;
    text-align: center;
`

export const CheckoutButton = styled.button`
    background: #4E2FD2;
    color: #FFFFFF;
    border-radius: 4px;
    font-size: 17px;
    font-weight: 700;
    width: 100%;
    height: 48px;
    border: none;
    cursor: pointer;
`

export const SaveButton = styled.button`
    background: transparent;
    color: #484848;
    font-size: 14px;
    font-weight: 400;
    width: 100%;
    border: none;
    cursor: pointer;
    letter-spacing: -0.02px;
    text-decoration: underline;
    font-style: italic;
    margin-top: 8px;
`

export const OldCheckout = styled.p`
    color: #6F7882;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: .25%;
    text-decoration: line-through;
    margin: 0;
`

export const NewCheckout = styled.p`
    color: #4E2FD2;
    font-size: 24px;
    font-weight: 500;
    letter-spacing: -0.13%;
    margin: 0;
`

export const CheckoutBadge = styled(Badge)`
    background: #4E2FD2;
    border-radius: 3px;
    max-width: 113px;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -5%;
    padding: 5px 8px;
`

export const CheckoutSpace = styled(Space)`
    width: 100%;

    .ant-space-item {
        width: 100%;
    }
`