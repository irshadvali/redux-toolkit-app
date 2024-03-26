import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiServices = createApi({
  reducerPath: 'apiServices',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: (builder) => ({
    getAllPost: builder.query<any[], void>({
      query: () => ({
        url: 'posts',
        method: 'GET'
      })
    }),
    getPostById: builder.query<any, number>({
      query: (id) => ({
        url: `posts/${id}`,
        method: 'GET'
      })
    }),
    getPostByLimit: builder.query<any[], number>({
      query: (num) => ({
        url: `posts?_limit=${num}`,
        method: 'GET'
      })
    }),
    deletePost: builder.mutation<void, number>({
      query: (id) => ({
        url: `posts/${id}`,
        method: 'DELETE'
      })
    }),
    createPost: builder.mutation<any, Partial<any>>({
      query: (newPost) => ({
        url: 'posts',
        method: 'POST',
        body: newPost,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
    }),
    updatePost: builder.mutation<any, Partial<any>>({
      query: (updatePostData) => {
        const { id, ...data } = updatePostData;
        return {
          url: `posts/${id}`,
          method: 'PUT',
          body: data,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }
        };
      }
    }),
  }),
});

export const {
  useGetAllPostQuery,
  useGetPostByIdQuery,
  useGetPostByLimitQuery,
  useDeletePostMutation,
  useCreatePostMutation,
  useUpdatePostMutation,
} = apiServices;
