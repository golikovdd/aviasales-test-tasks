import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import './ticket.css'


const Ticket = ({ticket, getPrice, getPriceSymbol}) => (
    <div className="ticket">
        <div className="ticket__left clearfix">
            <div className="ticket__company-logo">
                <img src={`https://pics.avs.io/99/36/${ticket.carrier}@2x.png`} alt={ticket.carrier}/>
            </div>

            <a className="ticket__buy-btn">
                Купить<br/>
                <span>за {getPrice(ticket)}</span><span
                className="ticket__currency-symbol"> {getPriceSymbol(ticket)}</span>
            </a>
        </div>
        <div className="ticket__right">
            <div className="ticket__time-wrapper">
                <div className="ticket__time ticket__time_departure">
                    {moment(ticket.departure_time, "H:mm").format('HH:mm')}
                </div>
                <div className="ticket__stops">
                    <div className="ticket__stops-text">
                        {ticket.stops ? ticket.stops + (ticket.stops > 1 ? ' пересадки' : ' пересадка') : ''}&nbsp;
                    </div>
                    <div className="ticket__stops-line-wrapper">
                        <span className="ticket__stops-airplane"/>
                        <div className="ticket__stops-line"/>
                    </div>
                </div>
                <div className="ticket__time ticket__time_arrival">
                    {moment(ticket.arrival_time, "H:mm").format('HH:mm')}
                </div>
            </div>
            <div className="ticket__date-wrapper">
                <div className="ticket__date ticket__date_departure">
                    {ticket.origin}, {ticket.origin_name}
                    <div className="ticket__date-mini">
                        {moment(ticket.departure_date, "DD.MM.YY").format('D MMM YYYY, ddd')}
                    </div>
                </div>
                <div className="ticket__date ticket__date_arrival">
                    {ticket.destination_name}, {ticket.destination}
                    <div className="ticket__date-mini">
                        {moment(ticket.arrival_date, "DD.MM.YY").format('D MMM YYYY, ddd')}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

Ticket.propTypes = {
    ticket: PropTypes.shape({
        id: PropTypes.string.isRequired,
        carrier: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        departure_time: PropTypes.string.isRequired,
        arrival_time: PropTypes.string.isRequired,
        departure_date: PropTypes.string.isRequired,
        arrival_date: PropTypes.string.isRequired,
        origin: PropTypes.string.isRequired,
        origin_name: PropTypes.string.isRequired,
        destination: PropTypes.string.isRequired,
        destination_name: PropTypes.string.isRequired,
        stops: PropTypes.number.isRequired,
    }).isRequired,
    getPrice: PropTypes.func.isRequired,
    getPriceSymbol: PropTypes.func.isRequired,
};

export default Ticket
