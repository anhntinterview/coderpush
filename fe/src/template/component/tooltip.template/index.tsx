import {
    useAddNewPostMutation,
    useEditPostMutation,
} from 'app/redux/posts/slice';
import * as React from 'react';
import { PostRO } from 'shared/dto/post.dto';
import { validationErrorMsg } from 'template/constant/validation';
import { ITooltipProps } from './type';

const TootipTemplate: React.FunctionComponent<ITooltipProps> = (props) => {
    const { direction, data, posts, post, setPost, setValidatationError } =
        props;

    const [editPost, { isLoading: isEditPostLoading }] = useEditPostMutation();
    const [addNewPost, { isLoading: isAddNewPostLoading }] =
        useAddNewPostMutation();
    const initNewPostValue = { title: '', body: '' };
    const newPostRef = React.useRef<PostRO | undefined>(initNewPostValue);

    React.useEffect(() => {
        if (post) {
            newPostRef.current = {
                title: post.title,
                body: post.body,
            };
        } else {
            newPostRef.current = undefined;
        }
    }, [post]);

    const handleOnEditPost = async () => {
        if (post && !isEditPostLoading) {
            try {
                await editPost(post).unwrap();
                setPost(undefined);
            } catch (err) {
                console.error('Failed to update the post: ', err);
            }
        }
    };

    const handleOnAddNewPost = async () => {
        if (newPostRef.current && !isAddNewPostLoading) {
            try {
                await addNewPost(newPostRef.current).unwrap();
                setPost(undefined);
            } catch (err) {
                console.error('Failed to add the post: ', err);
            }
        }
    };

    const handleEmptyStr = async () => {
        setPost({
            id: '',
            slug: '',
            title: '',
            body: '',
        });

        if (
            newPostRef.current?.title === '' ||
            newPostRef.current?.body === ''
        ) {
            setValidatationError(validationErrorMsg);
        } else {
            return await handleOnAddNewPost();
        }
    };

    const handleOnSavePostClicked = async () => {
        if (posts && post) {
            const existPost = posts.filter((item) => post.id === item.id)[0];
            if (existPost) {
                return await handleOnEditPost();
            } else {
                handleEmptyStr();
            }
        } else {
            handleEmptyStr();
        }
    };

    return (
        <nav className="bg-gray-50 dark:bg-gray-700">
            <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
                <div className="flex items-center">
                    <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                        {data.map((item) => (
                            <li
                                className="text-gray-900 dark:text-white hover:underline cursor-pointer"
                                onClick={handleOnSavePostClicked}
                                key={item.name}
                            >
                                <img
                                    src={item.icon}
                                    alt="_edit_ico"
                                    width={30}
                                    height={30}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default TootipTemplate;
