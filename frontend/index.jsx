import React from 'react';
import ReactDom from 'react-dom';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {

    const store = configureStore();

    // TESTES TESTES ONE TWO... THREE?
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.$ = $
    // END OF TESTES

    const root = document.getElementById("root");
    ReactDom.render(<h1>Enough to know that I've forgotten, and not enough to actually remember anything.</h1>, root)
})