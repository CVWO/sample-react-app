// import CommentItem from "./CommentItem";
// import Comment from "../types/Comment";
import ThreadItem from "./Testpart2";
import Thread from "../types/Thread";
import { API_URL } from "../config";

import React, { useEffect, useState } from "react";

type Props = {
    styled: boolean;
};

const BasicPostList: React.FC<Props> = ({ styled }: Props) => {
    const [threads, setThreads] = useState<Thread[]>([]);

    useEffect(() => {
        const fetchThreads = async () => {
            try {
                const response = await fetch(`${API_URL}`);
                const data = await response.json();
                // console.log(Object.values(data.posts));
                // console.log(data.posts[0].ID);
                setThreads(data.posts);
            } catch (error) {
                console.error("Error fetching comments:", error);
            }
        };

        fetchThreads();
    }, [threads]);// app re rerenders when threads is updated

    return (
        <ul>
            {threads.map((thread) => (
                <ThreadItem thread={thread} styled={styled} key={thread.ID} />
            ))}
        </ul>
    );
};

export default BasicPostList;
