import tickets from '../api/tickets'
import currencies from '../api/currencies'
import * as types from '../constants/ActionTypes'

const receiveTickets = tickets => ({
    type: types.RECEIVE_TICKETS,
    tickets
});

const receiveCurrencies = currencies => ({
    type: types.RECEIVE_CURRENCIES,
    currencies
});


export const getTickets = () => dispatch => {
    tickets.getTickets(tickets => {
        dispatch(receiveTickets(tickets))
    })
};

export const getCurrencies = () => dispatch => {
    currencies.getCurrencies(currencies => {
        dispatch(receiveCurrencies(currencies))
    })
};

export const changeCurrency = (code) => (dispatch) => {
    dispatch({
        type: types.CHANGE_CURRENCY,
        code,
    })
};

export const changeTransplantsCount = (code, value) => (dispatch) => {
    dispatch({
        type: types.CHANGE_TRANSPLANTS_COUNT,
        code,
        value,
    })
};

export const changeTransplantsCountSingle = (code) => (dispatch) => {
    dispatch({
        type: types.CHANGE_TRANSPLANTS_COUNT_SINGLE,
        code,
    })
};