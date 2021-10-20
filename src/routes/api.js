const router = require('express')();
const axios = require('axios')
const ppp = require('../data/final.json')


router.get('/:from/:to', async (req, res) => {
    let from        = req.params.from;
    let to          = req.params.to;
    let conversion  = await axios.get(`https://freecurrencyapi.net/api/v2/latest?apikey=${process.env.CURRENCY_KEY}&base_currency=`+ppp[from]['currency_code'])
    
    let result = {
        country : {
            from:  ppp[from]['country'],
            to: ppp[to]['country']
        },
        currency : {
            from: ppp[from]['currency_code'],
            to: ppp[to]['currency_code']
        }, 
        conversion: {
            direct: conversion.data.data[ppp[to]['currency_code']],
            reverse: 1/conversion.data.data[ppp[to]['currency_code']],
            get factor() {
                return (ppp[to]['PPP']/ppp[from]['PPP'])/this.direct;
            } 
        }
    }
    
    res.json(result);
})

module.exports = router;