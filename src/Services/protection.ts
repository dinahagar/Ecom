import { createApi } from '@reduxjs/toolkit/query/react'
import protection from "../Api/protection";

export const protectionApi = createApi({
    reducerPath: 'protectionApi',
    baseQuery: async () => ({ data: protection }),
    endpoints: (build) => ({
        getAllProtectionApi: build.query({
            query() {
              return {
                url: "",
                method: 'GET',
              }
            }
        })
    })
})

export const { useGetAllProtectionApiQuery } = protectionApi