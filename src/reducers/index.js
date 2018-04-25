import {combineReducers} from 'redux'
import facets from './facets'
import tickets from './tickets'
import currencies from './currencies'
import {CHANGE_TRANSPLANTS_COUNT, CHANGE_TRANSPLANTS_COUNT_SINGLE, RECEIVE_TICKETS} from "../constants/ActionTypes";

const combinedReducers = combineReducers({
    currencies,
    facets,
    tickets
});

function crossSliceReducer(state, action) {
    switch (action.type) {
        case CHANGE_TRANSPLANTS_COUNT:
        case CHANGE_TRANSPLANTS_COUNT_SINGLE:
        case RECEIVE_TICKETS:
            return {
                ...state,
                tickets: tickets(state.tickets, action, state.facets),
            };
        default:
            return state;
    }
}

const rootReducer = (state, action) => {
    const intermediateState = combinedReducers(state, action);
    return crossSliceReducer(intermediateState, action);
};

export default rootReducer;

export const getPrice = state => (ticket) => {
    return ((ticket.price * state.currencies[state.facets.currency].course) | 0).toLocaleString('ru-RU');
};

export const getPriceSymbol = state => () => {
    return state.currencies[state.facets.currency].symbol
};