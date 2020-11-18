import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root"
import configureStore from './store/store';
import jwt_decode from 'jwt-decode'; // might need this??


document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore({});
  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store} />, root)
})