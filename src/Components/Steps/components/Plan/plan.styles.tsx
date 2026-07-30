import { Radio } from "antd";
import { styled } from "styled-components";

export const PlanDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const CamDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const CamImg = styled.img`
    width: 20px;
    height: 20px;
`

export const TypeDiv = styled.div`
    display: flex;
    gap: 10px;
    background: #fff;
    border-radius: 5px;
    padding: 0px 15px;

    @media(max-width: 370px) {
        display: block;
    }
`

export const CamP = styled.p`
    color: #000000;
    font-size: 16px;
    font-weight: 400;
`

export const StyledRadioGroup = styled(Radio.Group)`
     @media(max-width: 580px) {
        justify-content: end;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;

        .ant-radio-wrapper {
            margin: 0;
        }
    }
`