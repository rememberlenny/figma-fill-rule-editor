import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import store from './store/configStore';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
