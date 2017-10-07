const express = require('express')
const { twig } = require('twig')  //ประกาศ

const app = express()

app.set('view engine', 'twig')  //จะใช้twigนาจา

const homeController = require('./controllers/home.controller') //เรียกใช้home.controller
const newsController = require('./controllers/news.controller') //เรียกใช้news.controller

app.get('/', homeController.index)
app.get('/news', newsController.index)

app.use('/assets' , express.static(__dirname + '/static/assets', {
	maxAge: 86400000  //เป็นเวลาประมาณ1นาที จะดึงข้อมูลใหม่
}))

app.listen(8000, function(err) {
	console.log('Server is running on port 8000')
})