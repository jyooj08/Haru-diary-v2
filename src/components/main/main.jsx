import React from 'react';
import style from './main.module.css';
import store from '../../services/store';

const Main = (props) => {
    console.log(store.getState());
    
    return (
        <h1>Main</h1>     
    );
};

export default Main;