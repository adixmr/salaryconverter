const router = require('express')();
const axios = require('axios')
const ppp = require('../data/final.json')


router.get('/:from/:to', async (req, res) => {
    try {
        const from        = req.params.from;
        const to          = req.params.to;
        const conversion  = await axios.get(`https://currencyapi.com/api/v2/latest?apikey=${process.env.CURRENCY_KEY}&base_currency=`+ppp[from]['currency_code'])
        const result = {
            country : {
                from:   ppp[from]['country'],
                to:     ppp[to]['country']
            },
            currency : {
                from:   ppp[from]['currency_code'],
                to:     ppp[to]['currency_code']
            }, 
            conversion: {
                direct: from!=to ? conversion.data.data[ppp[to]['currency_code']] : 1,
                get reverse() {
                    return 1/this.direct;
                },
                get factor() {
                    return (ppp[to]['PPP']/ppp[from]['PPP'])/this.direct;
                } 
            }
        }
        
        res.json(result);
    } catch (err) {
        console.error(err);
        return res.status(400).send({
            status: false,
            message: 'Oops! Something went wrong. Please try again later.'
        });
    }
})

module.exports = router;
