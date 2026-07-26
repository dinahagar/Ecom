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
`