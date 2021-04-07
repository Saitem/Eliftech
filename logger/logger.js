const fs = require('fs')

const log = (req, res) => `[${new Date().toISOString()}] "${req.method} ${req.originalUrl} ${req.protocol.toUpperCase()}"\n`

const logger = (method) => {
    if (method === 'dev') {
        return (req, res, next) => {

            console.log(log(req, res))      
            next()
        }
    } else if (method === 'logs') {
        return (req, res, next) => {
            let stream = fs.createWriteStream("logs.log", {flags:'a'})
            stream.write(log(req, res))
            stream.end()
       
            next()
        }
    }
}

module.exports = logger