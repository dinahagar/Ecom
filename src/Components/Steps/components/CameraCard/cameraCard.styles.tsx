import { Badge, Card, Col } from "antd";
import { styled } from "styled-components";

export const Cameracard = styled(Card)`
    .ant-card-body {
        padding: 7px;
        height: stretch;

        .ant-row {
            height: stretch;
        }
    }
`;

export const SaveBadge = styled(Badge)`
    background: #4E2FD2;
    border-radius: 10px;
    padding: 2px 6px;
    width: 65px;
    height: 19px;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: 400;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
`;

export const DetailsCol = styled(Col)`
  display: grid;
  gap: 3px;
`;

export const TitleP = styled.p`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.6px;
  color: #1f1f1f;
  margin: 0;
`;

export const DescP = styled.p`
  color: #1f1f1fbf;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.6px;
  margin: 0px;
`;

export const DescSpan = styled.span`
  color: #0000ee;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.6px;
  text-decoration: underline;
  cursor: pointer;
`;

export const ColorsDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    flex-wrap: wrap;
`;

export const PriceDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between; 
    flex-wrap: wrap;
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

export const ButtonImg = styled.img`
    width: 22px;
    height: 22px;
`;

export const ColorName = styled.span`
    color: #1F1F1F;
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 0.6px;
`;

export const ColorButton = styled.button`
    display: flex;
    align-items: center;
    border-radius: 2px;
    width: 65px;
    min-width: 65px;
    height: 26px;
    padding: 1px 5px;
    cursor: pointer;
`;

export const ImgCol = styled(Col)`
    @media (max-width: 1200px) {
        display: grid;
        align-items: center;
    }
`;

export const PriceValue = styled.div`
    @media (max-width: 1200px) {
        display: flex;
        gap: 4px;
    }
`;
