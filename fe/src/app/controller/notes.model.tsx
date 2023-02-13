import Container from 'typedi';
import TooltipTemplateModel from 'template/controller/tooltip.model';
import PostService from 'template/service/post.service';
import { useGetPostsQuery } from 'app/redux/posts/slice';
import { PostDTO } from 'shared/dto/post.dto';

class NotesModel {
    public readonly postService = Container.get(
        PostService<PostDTO, Array<PostDTO>>
    );

    public posts() {
        return this.postService.posts(useGetPostsQuery);
    }
}

export default NotesModel;
