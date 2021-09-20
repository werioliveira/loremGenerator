const {Router} = require('express')
const generate = require('./generator/lorem')
const routes = Router()

routes.get('/',(req,res)=>{
    let data = generate.generateParagraphs(10) //get loreipsum text from lorem.js
    return res.render('index',{data})
})
module.exports = routes