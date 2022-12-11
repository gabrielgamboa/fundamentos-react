import React from "react";
import PostHeader from "./PostHeader";

import styles from "./Post.scss"

import { Rate, Subtitle } from "./styles";

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
            <Subtitle>{post.subtitle}</Subtitle>
            <Rate>Media de likes: {post.likes / 2}</Rate>
        </article>
    );
}