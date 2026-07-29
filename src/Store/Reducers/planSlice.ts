import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PlanState {
  planType: string;
}

const initialState: PlanState = {
  planType: "",
};

export const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    selectedPlanType(state, action: PayloadAction<string>) {
        state.planType = action.payload;
    },
  },
});

export const { selectedPlanType } = planSlice.actions;

export default planSlice.reducer;
