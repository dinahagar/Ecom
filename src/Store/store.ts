import { configureStore } from "@reduxjs/toolkit";
import { cameraApi } from "../Services/camera";
import cameraReducer from "./Reducers/cameraSlice";

export const store = configureStore({
  reducer: {
    camera: cameraReducer,
    [cameraApi.reducerPath]: cameraApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cameraApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
