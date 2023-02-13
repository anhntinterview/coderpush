import * as React from 'react';
import NotesModel from 'app/controller/notes.model';
import ContentLeftTemplate from 'template/component/sidebar.template';
import WYSWYGTemplate from 'template/component/wyswyg.template';
import LeftStack from 'app/components/LeftStack';
import { Loading } from 'template/component/loading.template';
import TooltipTemplate from 'template/component/tooltip.template';
import { tooltipData, TooltipDirection } from 'template/constant/tooltip';
import { PostDTO } from 'shared/dto/post.dto';

export interface INotesProps {
    model: NotesModel;
}

const NotesView: React.FunctionComponent<INotesProps> = (props) => {
    const { model } = props;

    let leftStack;
    let tooltip;

    const { data, isLoading, isFetching, isSuccess, isError, error } =
        model.posts();
    const [post, setPost] = React.useState<PostDTO>();
    const [validateError, setValidatationError] = React.useState<string>();

    if (isLoading) {
        leftStack = <Loading isLoading />;
    } else if (isSuccess) {
        leftStack = <LeftStack data={data} setPost={setPost} />;
    } else if (isError) {
        leftStack = <div>{error!.toString()}</div>;
    }

    tooltip = (
        <TooltipTemplate
            direction={TooltipDirection.TOP}
            data={tooltipData}
            posts={data}
            post={post}
            setPost={setPost}
            setValidatationError={setValidatationError}
        />
    );

    return (
        <div className="flex p-0 bg-white border-gray-200 bg-gradient-to-r code-preview dark:bg-gray-900 border-x dark:border-gray-600">
            <div className="w-full code-responsive-wrapper">
                {tooltip}
                <ContentLeftTemplate>
                    {leftStack}
                    <WYSWYGTemplate
                        post={post}
                        setPost={setPost}
                        validateError={validateError}
                    />
                </ContentLeftTemplate>
            </div>
        </div>
    );
};

export default NotesView;
