import { Container, Service } from 'typedi';
import PostService from 'template/service/post.service';
import { PostDTO } from 'shared/dto/post.dto';

@Service()
class TooltipTemplateModel {
    protected postService = Container.get(PostService<PostDTO, Array<PostDTO>>);
}

export default TooltipTemplateModel;
