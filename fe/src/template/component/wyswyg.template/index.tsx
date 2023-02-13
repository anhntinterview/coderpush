import * as React from 'react';
import { PostDTO } from 'shared/dto/post.dto';

interface IWYSWYGProps {
    post?: PostDTO;
    setPost: React.Dispatch<React.SetStateAction<PostDTO | undefined>>;
    validateError: string | undefined;
}

const WYSWYGTemplate: React.FunctionComponent<IWYSWYGProps> = (props) => {
    const { post, setPost, validateError } = props;

    let wyswyg;
    const handleInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPost((prevState) => {
            if (prevState) {
                return {
                    ...prevState,
                    title: e.target.value,
                };
            }
        });
    };

    const handleTextareaOnChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setPost((prevState) => {
            if (prevState) {
                return {
                    ...prevState,
                    body: e.target.value,
                };
            }
        });
    };

    if (post) {
        wyswyg = (
            <>
                <input
                    className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    type="text"
                    value={post?.title}
                    onChange={handleInputOnChange}
                />
                <textarea
                    className="p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name=""
                    id=""
                    value={post?.body}
                    onChange={handleTextareaOnChange}
                ></textarea>
                {validateError && <p>{validateError}</p>}
            </>
        );
    }

    return <div className="w-full flex flex-col">{wyswyg}</div>;
};

export default WYSWYGTemplate;
