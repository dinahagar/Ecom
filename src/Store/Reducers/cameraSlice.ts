import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CameraState {
  selectedItems: number;
  quantities: Record<number, number>;
}

const initialState: CameraState = {
  selectedItems: 0,
  quantities: {},
}

export const cameraSlice = createSlice({
  name: 'camera',
  initialState,
  reducers: {
    increaseSelectedItems:(state) => {
      state.selectedItems += 1
    },
    decreaseSelectedItems:(state) => {
      state.selectedItems -= 1
    },
    increaseQuantity(state, action: PayloadAction<number>) {
      const id = action.payload;
      state.quantities[id] = (state.quantities[id] ?? 0) + 1;
    },
    decreaseQuantity(state, action: PayloadAction<number>) {
      const id = action.payload;
      state.quantities[id] = Math.max(
        (state.quantities[id] ?? 0) - 1,
        0
      );
    },
  },
})

export const { increaseSelectedItems, decreaseSelectedItems, increaseQuantity, decreaseQuantity } = cameraSlice.actions

export default cameraSlice.reducer