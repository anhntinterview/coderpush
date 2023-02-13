import { Service } from 'typedi';
import { MutationDefinitionCustomization, UseQuery } from 'core/redux/type';
import { UseMutation } from '@reduxjs/toolkit/dist/query/react/buildHooks';

function useRTKQuery<R>(useQuery: UseQuery<R>, args?: any) {
    const { data, isLoading, isFetching, isSuccess, isError, error, refetch } =
        useQuery(undefined || args);
    return { data, isLoading, isFetching, isSuccess, isError, error, refetch };
}

function useRTKMutation<B>(
    useMutation: UseMutation<MutationDefinitionCustomization<B>>
) {
    const [mutationAction, { isLoading, isError, isSuccess, isUninitialized }] =
        useMutation();

    return { mutationAction, isLoading, isSuccess, isError, isUninitialized };
}

@Service()
class HttpService<B> {
    public queryAPI = useRTKQuery;
    public mutationAPI = useRTKMutation;
    public async execMutation(
        body: Partial<B>,
        useMutation: UseMutation<MutationDefinitionCustomization<B>>
    ) {
        const { mutationAction } = this.mutationAPI(useMutation);
        await mutationAction(body).unwrap();
    }
}

export default HttpService;
