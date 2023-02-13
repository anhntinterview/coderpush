import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const coreSliceApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  tagTypes: [
    "Posts",
  ],
  endpoints: () => ({}),
});

export default coreSliceApi.reducer;
