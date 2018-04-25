import {RECEIVE_CURRENCIES} from '../constants/ActionTypes'

const currencies = (state, action) => {
    switch (action.type) {
        case RECEIVE_CURRENCIES:
            return action.currencies;
        default:
            return state || {
                    RUB: {
                        course: 1,
                        symbol: '₽',
                        label: 'RUB',
                    },
                    USD: {
                        course: 1,
                        symbol: '$',
                        label: 'USD',
                    },
                    EUR: {
                        course: 1,
                        symbol: '€',
                        label: 'EUR',
                    },
                }
    }
};

export default currencies;
