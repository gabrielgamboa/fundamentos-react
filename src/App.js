import React from 'react';
import Post from './Post';
import Header from './Header';

export default function App() {
    return (
        <React.Fragment>
           <Header title="Jstack Blog">
                <h2>Posts da semana</h2>
           </Header>

           <hr/>

            <Post title="Título da notícia" subtitle="Subtítulo da notícia"></Post>
            <Post title="Título da notícia" subtitle="Subtítulo da notícia"></Post>

        </React.Fragment>
    );
}
