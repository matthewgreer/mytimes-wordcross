import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    // TESTES TESTES ONE TWO... THREE?
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // window.$.ajax = $.ajax
    // END OF TESTES

    const root = document.getElementById("root");
    ReactDOM.render(<h2>ReactDOM.rendering here, so there's that...</h2>, root)
})