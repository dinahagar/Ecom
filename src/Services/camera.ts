import { createApi } from '@reduxjs/toolkit/query/react'
import cameras from "../Api/data";

export const cameraApi = createApi({
    reducerPath: 'cameraApi',
    baseQuery: async () => ({ data: cameras }),
    endpoints: (build) => ({
        getAllCameras: build.query({
            query() {
              return {
                url: "",
                method: 'GET',
              }
            }
        })
    })
})

export const { useGetAllCamerasQuery } = cameraApi