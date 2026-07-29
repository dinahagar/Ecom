import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CameraState {
  selectedItems: number;
  quantities: Record<number, number>;
  selectedColor: Record<number, number>;
}

const initialState: CameraState = {
  selectedItems: 0,
  quantities: {},
  selectedColor: {},
};

export const cameraSlice = createSlice({
  name: "camera",
  initialState,
  reducers: {
    increaseSelectedItems: (state) => {
      state.selectedItems += 1;
    },
    decreaseSelectedItems: (state) => {
      state.selectedItems -= 1;
    },
    increaseQuantity(state, action: PayloadAction<number>) {
      const id = action.payload;
      state.quantities[id] = (state.quantities[id] ?? 0) + 1;
    },
    decreaseQuantity(state, action: PayloadAction<number>) {
      const id = action.payload;
      state.quantities[id] = Math.max((state.quantities[id] ?? 0) - 1, 0);
    },
    selectedColor(state, action: PayloadAction<{ cardId: number; colorId: number }>) {
      const { cardId, colorId } = action.payload;
      state.selectedColor[cardId] = colorId;
    },
  },
});

export const {
  increaseSelectedItems,
  decreaseSelectedItems,
  increaseQuantity,
  decreaseQuantity,
  selectedColor
} = cameraSlice.actions;

export default cameraSlice.reducer;
