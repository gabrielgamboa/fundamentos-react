import React from "react";
import PostHeader from "./PostHeader";

export default function Post({ post, onRemove }) {
    return (
        <>
            <article>
                <PostHeader
                    onRemove={onRemove}
                    key={post.id}
                    post={{
                        id: post.id,
                        title: post.title,
                        subtitle: post.subtitle,
                        read: post.read,
                        likes: post.likes,
                    }}
                ></PostHeader>
                <br />
                <small>{post.subtitle}</small>
                <br />
                Likes: {post.likes}
            </article>
            <br />
        </>
    );
}