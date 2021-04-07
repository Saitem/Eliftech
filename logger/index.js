
const app = require('express')()

const logger = require('./logger')


app.use(logger('logs'))

app.get('/', (req, res) => {
    res.send('hello world')
})


app.listen(3000, () => console.log(`Server working on port ${3000}`))