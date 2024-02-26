import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        // delete to avoid accidentally using the global current user rather than
        //   the one in Redux store
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    // FOR TESTING ONLY -- comment/remove when not actively needed
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
})
