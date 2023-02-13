import { PostDTO, PostRO } from 'shared/dto/post.dto';
import { RTKQStateDTO, RTKQStateItemDTO } from 'shared/dto/redux.dto';
import { coreSliceApi } from 'template/redux/slice/posts';

export const extendedApiSlice = coreSliceApi.injectEndpoints({
    endpoints: (builder) => ({
        getPosts: builder.query<Array<PostDTO>, void>({
            query: () => '/articles',
            transformResponse(rawResult: RTKQStateDTO<PostDTO>, meta, arg) {
                return rawResult.list;
            },
            providesTags: (result) => {
                return result
                    ? [
                          ...result.map(({ id }) => ({
                              type: 'Posts' as const,
                              id,
                          })),
                          { type: 'Posts', id: 'LIST' },
                      ]
                    : [{ type: 'Posts', id: 'LIST' }];
            },
        }),
        getPost: builder.query<PostDTO, string>({
            query: (postId) => `/articles/${postId}`,
            transformResponse(rawResult: RTKQStateItemDTO<PostDTO>, meta, arg) {
                return rawResult.article;
            },
            providesTags: (result, error, arg) =>
                result ? [{ type: 'Posts', id: arg }] : ['Posts'],
        }),
        addNewPost: builder.mutation<PostRO, Partial<PostRO>>({
            query: (body) => {
                return {
                    url: '/articles',
                    method: 'POST',
                    body: { article: body },
                };
            },
            invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
        }),
        editPost: builder.mutation<PostDTO, Partial<PostDTO>>({
            query: (body) => {
                const { slug } = body;
                // delete body?.slug;
                return {
                    url: `/articles/${slug}`,
                    method: 'PUT',
                    body: { article: body },
                };
            },
            invalidatesTags: (result, error, arg) => [
                { type: 'Posts', id: arg.id },
            ],
        }),
    }),
});

export const {
    useGetPostsQuery,
    useGetPostQuery,
    useAddNewPostMutation,
    useEditPostMutation,
} = extendedApiSlice;
