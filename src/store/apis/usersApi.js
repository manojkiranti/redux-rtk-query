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
          console.log("result", result);
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
      deleteUser: builder.mutation({
        invalidatesTags: [{ type: "User", id: "USER" }],
        query: (user) => {
          return {
            url: `/users/${user.id}`,
            method: "DELETE",
          };
        },
      }),
    };
  },
});

export const { useFetchUsersQuery, useAddUserMutation, useDeleteUserMutation } =
  usersApi;
export { usersApi };
