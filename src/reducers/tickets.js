import {
    RECEIVE_TICKETS, CHANGE_TRANSPLANTS_COUNT,
    CHANGE_TRANSPLANTS_COUNT_SINGLE
} from '../constants/ActionTypes'

const guid = () => {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};

const filterFacets = (tickets, facets) => {
    return tickets.filter((_) => {
        return facets.transplantsCount.indexOf('all') !== -1 || facets.transplantsCount.indexOf(_.stops) !== -1
    })
};

const filteredList = (state = [], action, facets) => {
    if (!facets) {
        return state || {
                original: [],
                filtered: [],
            };
    }
    switch (action.type) {
        case RECEIVE_TICKETS:
            action.tickets.forEach((el) => {
                el.id = guid();
            });
            return {
                original: action.tickets,
                filtered: filterFacets(action.tickets, facets),
            };
        case CHANGE_TRANSPLANTS_COUNT:
        case CHANGE_TRANSPLANTS_COUNT_SINGLE:
            return {
                ...state,
                filtered: filterFacets(state.original, facets),
            };
        default:
            return state || {
                    original: [],
                    filtered: [],
                }
    }
};

export default filteredList

export const getTickets = (state) => {
    return (state.tickets && state.tickets.filtered) || [];
};


