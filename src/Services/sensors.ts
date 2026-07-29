import { createApi } from '@reduxjs/toolkit/query/react'
import sensors from "../Api/sensors";

export const sensorsApi = createApi({
    reducerPath: 'sensorsApi',
    baseQuery: async () => ({ data: sensors }),
    endpoints: (build) => ({
        getAllSensors: build.query({
            query() {
              return {
                url: "",
                method: 'GET',
              }
            }
        })
    })
})

export const { useGetAllSensorsQuery } = sensorsApi