import React from 'react';
import style from './main.module.css';
import store from '../../services/store';

const Main = (props) => {
    const user = store.getState().user;
    
    return (<>
        <h1>{user.name}</h1>
        <h1>{user.uid}</h1>
    </>);
};

export default Main;