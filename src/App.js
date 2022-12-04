import React, { useState } from 'react';
import Post from './Post';
import Header from './Header';

export default function App() {
    const [posts, setPost] = useState([
        {
            id: Math.random(),
            title: 'Titulo 1',
            subtitle: 'Subtitulo 1',
            likes: 30,
            read: true
        },
        {
            id: Math.random(),
            title: 'Titulo 2',
            subtitle: 'Subtitulo 2',
            likes: 40,
            read: false
        },
    ]);

    function handleRefresh() {
        setPost((prevState) => [...prevState, {
            id: Math.random(),
            title: `Titulo ${posts.length + 1}`,
            subtitle: `Subtitulo ${posts.length + 1}`,
            likes: 50,
        }]);

        //Diferente do exemplo acima, se não utilizarmos a função com o prevState
        //Poderá haver inconsistência de dados devido à atualização de componentes serem feitas de 
        //Forma assíncrona

        //Normalmente passamos diretamente quando a atualização não depende do estado anterior

        // setPost([...posts, {
        //     id: Math.random(),
        //     title: `Titulo ${posts.length}`,
        //     subtitle: `Subtitulo ${posts.length}`,
        //     likes: 50,
        // }]);
    }

    function handleRemovePost(id) {
        const updatedPosts = posts.filter(post => post.id !== id);
        setPost((prevState) => prevState.filter(post => post.id !== id));
    }

    return (
        <>
            <Header title="Jstack Blog">
                <h2>
                    Posts da semana
                    <button onClick={handleRefresh}>Atualizar</button>
                </h2>
            </Header>

            <hr />

            {posts.map(post => (
                <Post
                    onRemove={handleRemovePost}
                    key={post.id}
                    post={{
                        id: post.id,
                        title: post.title,
                        subtitle: post.subtitle,
                        read: post.read,
                        likes: post.likes,
                    }}
                >
                </Post>
            ))}

        </>
    );
}
