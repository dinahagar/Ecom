import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CameraState {
  quantities: Record<number, number>;
  selectedColor: Record<number, number>;
}

const initialState: CameraState = {
  quantities: {},
  selectedColor: {},
};

export const cameraSlice = createSlice({
  name: "camera",
  initialState,
  reducers: {
    increaseQuantity(state, action: PayloadAction<number>) {
      const id = action.payload;
      state.quantities[id] = (state.quantities[id] ?? 0) + 1;
    },
    decreaseQuantity(state, action: PayloadAction<number>) {
      const id = action.payload;
      state.quantities[id] = Math.max((state.quantities[id] ?? 0) - 1, 0);
    },
    selectedColor(
      state,
      action: PayloadAction<{ cardId: number; colorId: number }>,
    ) {
      const { cardId, colorId } = action.payload;
      state.selectedColor[cardId] = colorId;
    },
    loadQuantities(state, action: PayloadAction<Record<number, number>>) {
      state.quantities = action.payload;
    },
    loadSelectedColors(state, action: PayloadAction<Record<number, number>>) {
      state.selectedColor = action.payload;
    },
    resetQuantities(state) {
      state.quantities = {};
    },
    resetColor(state) {
      state.selectedColor = {};
    },
  },
});

export const {
  loadQuantities,
  loadSelectedColors,
  increaseQuantity,
  decreaseQuantity,
  selectedColor,
  resetQuantities,
  resetColor
} = cameraSlice.actions;

export default cameraSlice.reducer;
