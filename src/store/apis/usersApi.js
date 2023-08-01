import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const usersApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints(builder) {
    return {
      fetchUsers: builder.query({
        providesTags: (result, error) => {
          console.log("error", error);
          return result
            ? [
                ...result.map(({ id }) => ({ type: "User", id })),
                { type: "User", id: "USER" },
              ]
            : [{ type: "User", id: "USER" }];
        },
        query: () => {
          return {
            url: "/users",
            method: "GET",
          };
        },
      }),
      addUser: builder.mutation({
        invalidatesTags: [{ type: "User", id: "USER" }],
        query: (user) => {
          return {
            url: "/users",
            method: "POST",
            body: user,
          };
        },
      }),
    };
  },
});

export const { useFetchUsersQuery, useAddUserMutation } = usersApi;
export { usersApi };
