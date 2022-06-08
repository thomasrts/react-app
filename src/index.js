import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './redux/index'
import store from './redux/store/store'
import {Provider} from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
