const path = require('path')
const { readFile, writeFile } = require('fs')

console.log('Start')
readFile(path.join('content', 'first.txt'), 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return null
    }

    const first = result
    readFile(path.join('content', 'second.txt'), 'utf-8', (err, result) => {
        if (err) {
            console.log(err)
            return null
        }
        const second = result

        writeFile(path.join('content', 'result-async.txt'),
            `Here is the result: ${first}, ${second}`, (err, result) => {
                if (err) {
                    console.log(err)
                    return null
                }
                console.log('Done with his task')
            }
        )
    })
})

console.log('Starting next task');