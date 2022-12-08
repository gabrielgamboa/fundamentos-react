import React from "react";
import Button from "../Button";

export default function PostHeader({ post, onRemove }) {
    return (
        <>
            <strong>
                {post.read ? <s> {post.title} </s> : post.title}
            </strong>
            <Button onClick={() => onRemove(post.id)}>
                Remover
            </Button>
        </>
    );
}