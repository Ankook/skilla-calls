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
      query: (values) => ({
        url: `mango/getList`,
        method: 'POST',
        body: values
      }),
    }),
    getRecord: builder.query<RecordType, IGetRecordDto>({ //<ResulType,  queryFn(queryDto)>
      query: ({ record, partnership_id }) => ({
        url: `mango/getRecord?record=${record}&partnership_id=${partnership_id}`,
        method: 'POST',
        headers: {
          "content-type": "audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3",
          "content-transfer-encoding": "binary",
          "content-disposition": __filename="record.mp3"
        },
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetListQuery, useGetRecordQuery } = skillaApi;