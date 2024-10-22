import PostCard from "./components/PostCard/PostCard";
import "./App.css";

export default function HomeFeedScreen() {
    return (
        <div>
            <PostCard
                post={{
                    id: 1,
                    title: "Hello, World!",
                    content: "This is the firts post on our new blog",
                    user: {
                        id: 1,
                        name: "John Doe",
                    },
                }}
            >
                <PostCard.User/>
                <PostCard.Title/>
                <PostCard.Content/>
                <PostCard.Buttons/>
            </PostCard>
        </div>
    );
}

