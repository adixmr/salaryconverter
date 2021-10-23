const router = require('express')();
const ppp = require('../data/final.json')

router.get('/', async (req, res) => {
    try {
        let p = {};

        Object.keys(ppp).map((key) => {
            p[key] = ppp[key]['country']
        })

        res.json(p);
    } catch (err) {
        console.error(err.message);
        return res.status(400).send({
            status: false,
            message: 'Oops! Something went wrong. Please try again later.'
        });
    }
})

module.exports = router;