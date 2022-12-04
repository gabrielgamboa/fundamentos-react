import React from "react";

export default function Post({ post, onRemove }) {
    return (
        <>
            <article>
                <strong>{post.title}</strong>
                <button onClick={() => onRemove(post.id)}>
                    Remover
                </button>
                <br />
                <small>{post.subtitle}</small>
                <br />
                Likes: {post.likes}
            </article>
            <br />
        </>
    );
}