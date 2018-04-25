import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {getTickets} from "../reducers/tickets";
import {getPrice, getPriceSymbol} from "../reducers/index";
import Ticket from "../components/Ticket";

const Tickets = ({tickets, getPrice, getPriceSymbol}) => (
    <div className="tickets-wrapper">
        {tickets.map(ticket =>
            <div className="tickets-wrapper__element" key={ticket.id}>
                <Ticket ticket={ticket} getPrice={getPrice} getPriceSymbol={getPriceSymbol}/>
            </div>
        )}
    </div>
);

Tickets.propTypes = {
    tickets: PropTypes.array.isRequired,
    getPrice: PropTypes.func.isRequired,
    getPriceSymbol: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    tickets: getTickets(state),
    getPrice: getPrice(state),
    getPriceSymbol: getPriceSymbol(state),
});

export default connect(
    mapStateToProps,
)(Tickets)
