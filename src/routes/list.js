const router = require('express')();
const ppp = require('../data/final.json')


router.get('/', async (req, res) => {
    try {
        Object.keys(ppp).map((key) => {
            ppp[key] = ppp[key]['country']
        })

        res.json(ppp)   ;
    } catch (err) {
        console.error(err.message);
        res.json({error: 'There is some error with your request'})
    }
})

module.exports = router;