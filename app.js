require('dotenv')
const app = require('express')()

app.use('/api', require('./src/routes/api'))

app.listen('3001', (req, res) => {
    console.log(`Server running`)
})
