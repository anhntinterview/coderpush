import NotesModel from 'app/controller/notes.model';
import { PostDTO } from 'shared/dto/post.dto';
import { TooltipDirection } from 'template/constant/tooltip';

export interface ITooltipProps {
    direction: TooltipDirection;
    data: Array<ITooltipItem>;
    posts: PostDTO[] | undefined;
    post: PostDTO | undefined;
    setPost: React.Dispatch<React.SetStateAction<PostDTO | undefined>>;
    setValidatationError: React.Dispatch<
        React.SetStateAction<string | undefined>
    >;
}

export interface ITooltipItem {
    name: string;
    path?: string;
    icon: string;
}
