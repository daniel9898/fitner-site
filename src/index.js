import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './fonts/texgyreheros-bold-webfont.woff';
import './fonts/texgyreheros-bolditalic-webfont.woff';
import './fonts/texgyreheros-italic-webfont.woff';
import './fonts/texgyreheros-regular-webfont.woff';
import { Provider } from 'mobx-react';
import officeStore from './stores/branchOfficesStore';

const Root = (
    <Provider officeStore={officeStore}>
        <App />
    </Provider>
)

ReactDOM.render(Root , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
