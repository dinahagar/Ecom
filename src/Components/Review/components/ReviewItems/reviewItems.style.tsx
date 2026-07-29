import { Row } from "antd";
import { styled } from "styled-components";

export const NameP = styled.p`
    color: #0B0D10;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: .5px;
`

export const ReviewRow = styled(Row)`
    display: flex;
    align-items: center;
`

export const ReviewImgDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`

export const ReviewImg = styled.img`
    background: #FFFFFF;
    border-radius: 5px;
    width: 41px;
    height: 41px;
`

export const SectionP = styled.p`
    color: #A8B2BD;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 3%;
    text-transform: uppercase;
    border-top: solid 1px #CED6DE;
    padding-top: 10px;
`