import React from 'react';
import Post from './Post';

export default function App() {
    return (
        <React.Fragment>
            <h1>Componente App</h1>
            <Post title="Título da notícia" subtitle="Subtítulo da notícia"></Post>
            <Post title="Título da notícia" subtitle="Subtítulo da notícia"></Post>

        </React.Fragment>
    );
}
