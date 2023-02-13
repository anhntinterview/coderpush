import * as React from 'react';
import { PostDTO } from 'shared/dto/post.dto';

interface ILeftStackProps {
    data?: Array<PostDTO>;
    setPost: React.Dispatch<React.SetStateAction<PostDTO | undefined>>;
}

const LeftStack: React.FunctionComponent<ILeftStackProps> = (props) => {
    const { data, setPost } = props;

    const handleSelectPost = (id: string) => {
        return () => {
            const postSelected = data?.filter((item) => item.id === id)[0];
            setPost(() => postSelected);
        };
    };

    return (
        <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <ul className="space-y-2">
                    {data?.map((item) => (
                        <li
                            className="cursor-pointer flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                            onClick={handleSelectPost(item.id)}
                            key={item.id}
                        >
                            <article>
                                <h3>{item.title}</h3>
                                <p>{item.body}</p>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default LeftStack;
