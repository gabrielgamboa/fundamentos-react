import React from "react";
import PostHeader from "./PostHeader";

import styles from "./Post.scss"

export default function Post({ post, onRemove }) {
    return (
        <article className={post.removed ? styles.postDeleted : styles.post}>
            <PostHeader
                onRemove={onRemove}
                key={post.id}
                post={{
                    id: post.id,
                    title: post.title,
                    read: post.read,
                }}
            ></PostHeader>
            <br />
            <small>{post.subtitle}</small>
            <br />
            Likes: {post.likes}
        </article>
    );
}