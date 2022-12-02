import React from "react";

export default function Post({ post }) {
    return (
        <>
            <article>
                <strong>{post.title}</strong> <br />
                <small>{post.subtitle}</small> <br />
                Likes: {post.likes}
            </article>
            <br />
        </>
    );
}