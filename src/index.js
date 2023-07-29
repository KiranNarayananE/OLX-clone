import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import  {Firebase}  from './firebase.js/config';
import { UserAuthContextProvider } from './store/fireBaseContext';


ReactDOM.render(
<UserAuthContextProvider>
    <App />
</UserAuthContextProvider>, document.getElementById('root'));
