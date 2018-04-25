import axios from 'axios'

export default {
    getCurrencies: (cb) => {
        axios.get('https://free.currencyconverterapi.com/api/v5/convert?q=RUB_USD,RUB_EUR&compact=y').then((data) => {
            cb({
                RUB: {
                    course: 1,
                    symbol: '₽',
                    label: 'RUB',
                },
                USD: {
                    course: data.data.RUB_USD.val,
                    symbol: '$',
                    label: 'USD',
                },
                EUR: {
                    course: data.data.RUB_EUR.val,
                    symbol: '€',
                    label: 'EUR',
                },
            });
        });
    },
}
