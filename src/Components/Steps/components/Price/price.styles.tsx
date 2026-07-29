import { styled } from "styled-components";

export const PriceDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between; 
    flex-wrap: wrap;
`;

export const QuantityDiv = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 10px;
`;

export const QuantityButton = styled.button`
    width: 20px;
    height: 20px;
    border-radius: 4px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-weight: 500;
`;

export const QuantitySpan = styled.span`
    font-size: 16px;
    font-weight: 400;
    color: #0B0D10;
    margin-bottom: 4px;
`;

export const PriceValue = styled.div`
    @media (max-width: 1200px) {
        display: flex;
        gap: 4px;
    }
`;

export const NewPriceP = styled.p`
    margin: 0;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.6px;
    color: #575757;
`;

export const OldPriceP = styled.p`
    margin: 0;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.6px;
    color: #D8392B;
    text-decoration: line-through;
`;
