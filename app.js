//package.json created by 'npm init -y'
//now: for example 'npm i lodash' will add lodash to package.json
//also, the folder node_modules will be created
//Also, all the dependies of the different installed packages are added

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items)
console.log(newItems)