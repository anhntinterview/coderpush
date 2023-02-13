import { Container, Service } from 'typedi';
import HttpService from 'core/service/http.service';
import type {
    MutationDefinitionCustomization,
    UseQuery,
} from 'core/redux/type';
import { UseMutation } from '@reduxjs/toolkit/dist/query/react/buildHooks';

// B: Body, R: Response data
@Service()
class PostService<B, R> {
    protected httpService = Container.get(HttpService<B>);
    
    public posts(useQuery: UseQuery<R>) {
        return this.httpService.queryAPI(useQuery);
    }

    public post(useQuery: UseQuery<R>, args: any) {
        return this.httpService.queryAPI(useQuery, args);
    }

    public postsStatus(useMutation: UseMutation<MutationDefinitionCustomization<B>>) {
        return this.httpService.mutationAPI(useMutation)
    }

    public async execPost(
        body: B,
        useMutation: UseMutation<MutationDefinitionCustomization<B>>
    ) {
        return await this.httpService.execMutation(body, useMutation);
    }

    public updateNewPost(
        useMutation: UseMutation<MutationDefinitionCustomization<B>>
    ) {
        return this.httpService.mutationAPI(useMutation);
    }

    public deleteNewPost(
        useMutation: UseMutation<MutationDefinitionCustomization<B>>
    ) {
        return this.httpService.mutationAPI(useMutation);
    }
}

export default PostService;
