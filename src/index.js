import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
import moment from 'moment'
import reducer from './reducers'
import App from './containers/App'
import {getCurrencies, getTickets} from "./actions";


moment.updateLocale('ru', {
    weekdaysShort: 'Вс_Пн_Вт_Ср_Чт_Пт_Сб'.split('_'),
    monthsShort: {
        format: 'янв_февр_мар_апр_мая_июня_июля_авг_сент_окт_нояб_дек'.split('_')
    },
});

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
);

store.dispatch(getCurrencies());
store.dispatch(getTickets());

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);