const path = require('path')
const { readFileSync, writeFileSync } = require('fs')
    //same as:
    //const fs = require('fs')
    //fconst readFileSync = fs.readFileSync

const first = readFileSync(path.join('content', 'first.txt'), 'utf-8')
const second = readFileSync(path.join('content', 'second.txt'), 'utf-8')
    //console.log(first, second)

//flag: 'a' to append to file (not replace)
console.log('start')
writeFileSync(path.join('content', 'result-sync.txt'),
    `Here is the result: ${first}, ${second}`, { flag: 'a' }
)
console.log('Done with this task')
console.log('Starting the next task')