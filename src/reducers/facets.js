import {CHANGE_CURRENCY, CHANGE_TRANSPLANTS_COUNT, CHANGE_TRANSPLANTS_COUNT_SINGLE} from '../constants/ActionTypes'

const facets = (state, action) => {
    let transplantsCount;
    let _preventTransplantsCount;
    switch (action.type) {
        case CHANGE_CURRENCY:
            return {
                ...state,
                currency: action.code,
            };
        case CHANGE_TRANSPLANTS_COUNT:
            transplantsCount = [...state.transplantsCount];
            _preventTransplantsCount = [...state._preventTransplantsCount];
            if (transplantsCount) {
                if (action.value) {
                    if (action.code === 'all') {
                        _preventTransplantsCount = transplantsCount;
                        transplantsCount = [
                            'all', 0, 1, 2, 3,
                        ];
                    } else if (transplantsCount.indexOf(action.code) === -1) {
                        if (transplantsCount.indexOf('all') === -1 && transplantsCount.length === 3) {
                            _preventTransplantsCount = [...transplantsCount];
                            transplantsCount.push('all');
                        }
                        transplantsCount.push(action.code);
                    }
                } else {
                    if (action.code === 'all') {
                        transplantsCount = _preventTransplantsCount;
                    } else if (transplantsCount.indexOf(action.code) !== -1 && transplantsCount.length > 1) {
                        if (transplantsCount.indexOf('all') !== -1) {
                            transplantsCount.splice(transplantsCount.indexOf('all'), 1);
                        }
                        transplantsCount.splice(transplantsCount.indexOf(action.code), 1);
                    }
                }
            }
            return {
                ...state,
                transplantsCount,
                _preventTransplantsCount
            };
        case CHANGE_TRANSPLANTS_COUNT_SINGLE:
            transplantsCount = [action.code];
            return {
                ...state,
                transplantsCount,
            };
        default:
            return state || {
                    currency: "RUB",
                    transplantsCount: [0, 1, 2],
                    _preventTransplantsCount: [0, 1, 2],
                }
    }
};

export default facets;

export const getFacetValues = (state) => {
    return state.facets || {};
};