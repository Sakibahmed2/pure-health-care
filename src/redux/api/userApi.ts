import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const doctorApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSingleUser: build.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
  }),
});

export const { useGetSingleUserQuery } = doctorApi;
