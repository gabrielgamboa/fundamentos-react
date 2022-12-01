import React from 'react';
import Post from './Post';
import Header from './Header';

export default function App() {
    const posts = [
        {
            title: 'Titulo 1',
            subtitle: 'Subtitulo',
            likes: 30,
        },
        {
            title: 'Titulo 2',
            subtitle: 'Subtitulo 2',
            likes: 40,
        },
    ]

    return (
        <React.Fragment>
            <Header title="Jstack Blog">
                <h2>Posts da semana</h2>
            </Header>

            <hr />

            {posts.map(post => (
                <Post
                    key={post.subtitle}
                    title={post.title}
                    subtitle={post.subtitle}
                    likes={post.likes}
                >
                </Post>
            ))}

        </React.Fragment>
    );
}
