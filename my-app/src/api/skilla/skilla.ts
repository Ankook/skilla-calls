// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react' //создаем api, 
import { IGetListDto, ListOfCalls } from "./types";

// Define a service using a base URL and expected endpoints
export const skillaApi = createApi({
  reducerPath: 'skillaApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.skilla.ru/' }),
  endpoints: (builder) => ({
    getList: builder.query<ListOfCalls, IGetListDto>({ //<ResulType,  queryFn(queryDto)>
      query: ({date_start, date_end, in_out}) => `mango/getList?`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetListQuery } = skillaApi;