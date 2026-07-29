import { configureStore } from "@reduxjs/toolkit";
import { cameraApi } from "../Services/camera";
import { protectionApi } from "../Services/protection";
import { sensorsApi } from "../Services/sensors";
import cameraReducer from "./Reducers/cameraSlice";

export const store = configureStore({
  reducer: {
    camera: cameraReducer,
    [cameraApi.reducerPath]: cameraApi.reducer,
    [sensorsApi.reducerPath]: sensorsApi.reducer,
    [protectionApi.reducerPath]: protectionApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cameraApi.middleware, sensorsApi.middleware, protectionApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
