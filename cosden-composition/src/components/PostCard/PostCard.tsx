import { createContext, ReactNode, useContext } from "react";

type Post = {
    id: number;
    title: string;
    content: string;
    user: {
        id: number;
        name: string;
    };
};

type PostCardProps = {
    post: Post;
    children: ReactNode;
};

type PostCardContext = {
    post: Post;
};

const PostCardContext = createContext<PostCardContext | undefined>(undefined);

const usePostCardContext = () => {
    const context = useContext(PostCardContext);

    if (!context) {
        throw new Error(
            'usePostCardContext deve ser usado dentro de "PostCard"'
        );
    }

    return context;
};

export default function PostCard({ post, children }: PostCardProps) {
    return (
        <PostCardContext.Provider value={{ post }}>
            <div className="flex w-[300px] flex-col gap-2 rounded-md bg-neutral-800 p-2">
                {children}
            </div>
        </PostCardContext.Provider>
    );
}

PostCard.Title = function PostCardTitle() {
    const { post } = usePostCardContext();
    return <h2 className="text-lg font-semibold">{post.title}</h2>;
};

PostCard.Content = function PostCardContent() {
    const { post } = usePostCardContext();
    return <p>{post.content}</p>;
};

PostCard.User = function PostCardUser() {
    const { post } = usePostCardContext();
    return <p className="text-sm text-neutral-400">By {post.user.name}</p>;
};

PostCard.Buttons = function PostCardButtons() {
    return (
        <div className="flex flex-row gap-2">
            <button>Read More</button>
            <button>Comments</button>
        </div>
    );
};
