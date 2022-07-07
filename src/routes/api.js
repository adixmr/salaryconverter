const router = require('express')();
const axios = require('axios')
const ppp = require('../data/final.json')
const conversion = require('./conversion.json')
const fs = require("fs");

router.get('/:from/:to', async (req, res) => {
    try {
        const from        = req.params.from;
        const to          = req.params.to;
        let stats =  fs.statSync('./src/routes/conversion.json');


        if((Date.now() - stats.mtimeMs)/1000 > 10000){
            let currencyRates = await axios.get(`https://currencyapi.com/api/v2/latest?apikey=${process.env.CURRENCY_KEY}`)
            fs.writeFileSync('./src/routes/conversion.json', JSON.stringify(currencyRates.data));
        }

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
                direct: from!=to ? conversion.data[ppp[to]['currency_code']]/conversion.data[ppp[from]['currency_code']] : 1,
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
