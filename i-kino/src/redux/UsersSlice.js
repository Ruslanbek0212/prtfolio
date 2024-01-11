import {
    createApi,
    fetchBaseQuery
} from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
    reducerPath: "tasksApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8000/"
    }),
    endpoints: (builder) => ({
        users: builder.query({
            query: () => "/users"
        }),
        addUser: builder.mutation({
            query: (task) => ({
                url: "/users",
                method: "POST",
                body: task
            })
        }),
        updateUser: builder.mutation({
            query: ({ id, ...rest }) => ({
                url: `/users/${id}`,
                method: "PUT",
                body: rest
            })
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `/users/${id}`,
                method: "DELETE"
            })
        })
    })
});

export const {
    useUsersQuery,    //// GET
    useAddUserMutation,  /// POST
    useUpdateUserMutation, /// UPDate
    useDeleteUserMutation   /// DELETE
} = usersApi;

