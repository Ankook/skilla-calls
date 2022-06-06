// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react' //создаем api, 
import { IGetListDto,IGetRecordDto, ListOfCalls, RecordType } from "./types";

// Define a service using a base URL and expected endpoints
export const skillaApi = createApi({
  reducerPath: 'skillaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.skilla.ru/',
    prepareHeaders: (headers, { getState }) => {
      //const token = (getState() as RootState).auth.token
      const token = 'testtoken';
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
  
      return headers
    },
  }),
  endpoints: (builder) => ({
    getList: builder.query<ListOfCalls, IGetListDto>({ //<ResulType,  queryFn(queryDto)>
      query: ({ date_start, date_end, in_out }) => ({
        url: `mango/getList?date_start=${date_start}&date_end=${date_end}&in_out=${in_out}`,
        method: 'POST'
      }),
    }),
    getRecord: builder.query<RecordType, IGetRecordDto>({ //<ResulType,  queryFn(queryDto)>
      query: ({ record, partnership_id }) => ({
        url: `mango/getRecord?record=${record}&partnership_id=${partnership_id}`,
        method: 'POST'
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetListQuery, useGetRecordQuery } = skillaApi;