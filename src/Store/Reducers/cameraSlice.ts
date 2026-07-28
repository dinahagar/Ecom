import { createSlice } from '@reduxjs/toolkit'

export interface CameraState {
  selectedItems: number;
}

const initialState: CameraState = {
  selectedItems: 0,
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
    }
  },
})

export const { increaseSelectedItems, decreaseSelectedItems } = cameraSlice.actions

export default cameraSlice.reducer