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
    loadPlanType(state, action: PayloadAction<string>) {
      state.planType = action.payload;
    },
    resetPlan(state) {
      state.planType = "";
    },
  },
});

export const { selectedPlanType, loadPlanType, resetPlan } = planSlice.actions;

export default planSlice.reducer;
