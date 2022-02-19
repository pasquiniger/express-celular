const express = require('express'),
	routes = express.Router(),
	bodyParser = require('body-parser'),
	multer = require('multer'),
	upload = multer()


// La instruccion de abajo me demuestra que no hizo falta setear pug como template engine
// Ya estaba hecho en el programa principal y parece que es suficiente

routes.get('/', (req,res) => res.render('11_form'))

/*
app.set('view engine', 'pug')
app.set('views', './views')
*/
// For parsing application json

routes.use(bodyParser.json())

// for parsing application/www-                ?
routes.use(bodyParser.urlencoded({extended: true}))

//form-urlencoded

//for parsing multipart/form-data
routes.use(upload.array())

/*
routes.use(express.static('public'))
*/



//Cuando apreto el submit, me redirige a la ruta "/", haciendo inutil este paso, debo buscar sobre esto
routes.post('/', (req,res)=>{
	console.log(req.body)
	res.send('Received your request!')
})


/*
*/

module.exports = routes