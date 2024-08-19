import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles/main.scss"
import store from "./store/home"
import {BrowserRouter as Router} from "react-router-dom"

ReactDOM.render(
    <Router basename="/movie-website">
        <App store={store} />
    </Router>
    , document.getElementById('root'));
