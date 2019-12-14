import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from "./state/store/configure-store";
import {Provider} from "react-redux";
import dotenv from 'dotenv';

dotenv.config();
export const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
);

serviceWorker.unregister();
