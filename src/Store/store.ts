import { configureStore } from "@reduxjs/toolkit";
import { cameraApi } from "../Services/camera";
import { planApi } from "../Services/plan";
import { protectionApi } from "../Services/protection";
import { sensorsApi } from "../Services/sensors";
import cameraReducer from "./Reducers/cameraSlice";
import planReducer from "./Reducers/planSlice";

export const store = configureStore({
  reducer: {
    camera: cameraReducer,
    plan: planReducer,
    [cameraApi.reducerPath]: cameraApi.reducer,
    [sensorsApi.reducerPath]: sensorsApi.reducer,
    [protectionApi.reducerPath]: protectionApi.reducer,
    [planApi.reducerPath]: planApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cameraApi.middleware, sensorsApi.middleware, protectionApi.middleware, planApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
