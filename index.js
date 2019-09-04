const server = require('./api/server')


const portNum = 8000
server.listen(portNum, _ =>
{
    console.log(`\n** API on port ${portNum} **\n`)
})