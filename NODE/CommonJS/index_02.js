let info_01 = require('./a.js')
console.log('step 01:', info_01)
info_01.name = 'zhaojing'
console.log('step 02:', info_01)

// * node会对模块进行缓存
let info_02 = require('./a.js')
console.log('step 03:', info_02)
console.log('step 04:', info_01)

// * 使用delete require.cache[moduleName]来清除缓存
delete require.cache[require.resolve('./a.js')]
let info_03 = require('./a.js')
console.log('step 05:', info_03)