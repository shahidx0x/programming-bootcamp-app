/* eslint-disable no-undef */
import { config } from "@/utils/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = config.server_path;

const getToken = () => localStorage.getItem("authToken");

export const appServicesApi = createApi({
  reducerPath: "appServicesApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { endpoint }) => {
      const token = getToken();

      if (token && endpoint !== "login" && endpoint !== "register") {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  //login
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    //register
    register: builder.mutation({
      query: (userInfo) => ({
        url: "auth/register",
        method: "POST",
        body: userInfo,
      }),
    }),

    getEvents: builder.query({
      query: () => "events",
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useGetEventsQuery } =
  appServicesApi;
