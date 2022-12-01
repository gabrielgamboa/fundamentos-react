import React from "react";

export default function Post({ title, subtitle, likes }) {
    return (
        <>
            <article>
                <strong>{title}</strong> <br />
                <small>{subtitle}</small> <br />
                Likes: {likes}
            </article>
            <br />
        </>
    );
}