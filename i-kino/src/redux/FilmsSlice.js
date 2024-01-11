// import {
//     createApi,
//     fetchBaseQuery
// } from "@reduxjs/toolkit/query/react";

// export const filmsApi = createApi({
//     reducerPath: "tasksApi",
//     baseQuery: fetchBaseQuery({
//         baseUrl: "http://localhost:8000/"
//     }),
//     endpoints: (builder) => ({
//         films: builder.query({
//             query: () => "/films"
//         }),
//         addFilm: builder.mutation({
//             query: (task) => ({
//                 url: "/films",
//                 method: "POST",
//                 body: task
//             })
//         }),
//         updateFilm: builder.mutation({
//             query: ({ id, ...rest }) => ({
//                 url: `/films/${id}`,
//                 method: "PUT",
//                 body: rest
//             })
//         }),
//         deleteFilm: builder.mutation({
//             query: (id) => ({
//                 url: `/films/${id}`,
//                 method: "DELETE"
//             })
//         })
//     })
// });

// export const {
//     useFilmsQuery,    //// GET
//     useAddFilmMutation,  /// POST
//     useUpdateFilmMutation, /// UPDate
//     useDeleteFilmMutation   /// DELETE
// } = filmsApi;




// //// click.back-end.uz/payment
// //// click.back-end.uz/users
// //// click.back-end.uz/product