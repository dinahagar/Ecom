import { Row } from "antd";
import { styled } from "styled-components";

export const RowBody = styled(Row)`
    display: flex;
    justify-content: space-between;
    padding: 49.5px 136.5px;

    .ant-collapse {
        .ant-collapse-item {
            .ant-collapse-header {
                padding: 0;
            }
        }
    }

    @media (max-width: 1200px) and (min-width: 991px) {
        padding: 49.5px 113.5px;
    }

    @media (max-width: 991px) {
        padding: 49.5px 35px;
    }

`