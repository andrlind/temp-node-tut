const os = require('os')

//Info about current user
const user = os.userInfo()
console.log(user)

//Info about uptime
console.log(`The system uptime is ${os.uptime/3600/24} days.`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
}

console.log(currentOS)