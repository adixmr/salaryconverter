const router = require('express')();
const ppp = require('../data/final.json')


router.get('/', async (req, res) => {
    try {
        let p = {};

        Object.keys(ppp).map((key) => {
            p[key] = ppp[key]['country']
        })

        res.json(p)   ;
    } catch (err) {
        console.error(err.message);
        res.json({error: 'There is some error with your request'})
    }
})

module.exports = router;