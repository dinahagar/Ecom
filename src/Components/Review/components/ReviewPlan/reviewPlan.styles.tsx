import { styled } from "styled-components";

export const PlanTypeDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`

export const AllPlanType = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    
    @media(max-width: 400px) {
        display: block;
        margin-bottom: 15px;
    }
`