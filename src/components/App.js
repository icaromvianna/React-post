import React from 'react';
import Post from './Post';

export default class App extends React.Component{
    render(){
        return(
            <div>
                <h1>Ola mundo!</h1>
                <Post title='Aprendendo React'/>
                <Post title='Teste react'/>
            </div>
        )
    }
}