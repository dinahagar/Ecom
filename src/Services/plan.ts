import { createApi } from '@reduxjs/toolkit/query/react'
import plan from "../Api/plan";

export const planApi = createApi({
    reducerPath: 'planApi',
    baseQuery: async () => ({ data: plan }),
    endpoints: (build) => ({
        getAllPlanApi: build.query({
            query() {
              return {
                url: "",
                method: 'GET',
              }
            }
        })
    })
})

export const { useGetAllPlanApiQuery } = planApi