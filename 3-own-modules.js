const sayHi = require('./5-utils')
const names = require('./4-names')
const data = require('./6-alternative-flavor')

require('./7-mind-grenade')

sayHi(names['name1'])

//Alternative
//const { name1, name2 } = require('./4-names')
//sayHi(name1)