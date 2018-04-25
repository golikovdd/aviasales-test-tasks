/**
 * Mocking client-server processing
 */
import _tickets from './tickets.json'

const TIMEOUT = 100;

export default {
    getTickets: (cb, timeout) => setTimeout(() => cb(_tickets.tickets), timeout || TIMEOUT),
}
