import { configureStore } from "@reduxjs/toolkit";
import { cameraApi } from "../Services/camera";
import { sensorsApi } from "../Services/sensors";
import cameraReducer from "./Reducers/cameraSlice";

export const store = configureStore({
  reducer: {
    camera: cameraReducer,
    [cameraApi.reducerPath]: cameraApi.reducer,
    [sensorsApi.reducerPath]: sensorsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cameraApi.middleware, sensorsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
