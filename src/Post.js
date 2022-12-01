import React from "react";

export default function Post({title, subtitle}) {
    return (
       <>
            <article>
                <strong>{title}</strong> <br/>
                <small>{subtitle}</small>
            </article>
            <br/>
       </>
    );
}