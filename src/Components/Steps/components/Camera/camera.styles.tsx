import { Col } from "antd";
import { styled } from "styled-components";

export const CameraCol = styled(Col)`

    display: flex;
    justify-content: center;

    .ant-card {
        width: 100%; 
        min-height: 159px;
        margin-bottom: 15px;
        display: flex;
        align-items: center;
    }

    @media (max-width: 1470px) and (min-width: 1200px) {
        .ant-card {
            min-height: 225px;
        }
    }

    @media (max-width: 1200px) {
        .ant-card {
            min-height: 330px;
        }
    }
    @media (max-width: 991px) {
        .ant-card {
            max-width: 230px;
        }
    }

`;

export const NextBtnDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NextBtn = styled.button`
    font-size: 18px;
    font-weight: 400;
    color: #4E2FD2;
    border-radius: 7px;
    border: solid 1px #4E2FD2;
    padding: 5px 24px;
    background: transparent;
    min-height: 39px;
    min-width: 200px;
    cursor: pointer;

    &:hover {
        background: #4E2FD2;
        color: #fff;
    }
`;
