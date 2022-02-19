'use strict'
const express = require('express')
const app = express()
const things = require('./routes/things.js')
const views = require('./routes/template.js')
const formCode = require('./routes/11 form.js')
const bodyParser = require('body-parser')

// STATIC
app.use(express.static('public'))


app.set('view engine', 'pug')  //set it as the templating engine
app.set('views', './views')



app.get('/', (req,res) => {
	res.send('Hello World')
})

app.get('/hello', (req,res) => {
	res.send('Hello :3')
})

app.post('/hello', (req,res) => {
	res.send('You just called the post method at "/hello"\n')
})

app.all('/test', (req,res) => {
	res.send("HTTP method doesn't have any effect on this route!\n")
})


// Los proximos 2 app.get hacen lo mismo, devolviendo los parametros del name y del id de distinta forma
/*
app.get('/things/:name/:id', (req,res) => {
	let {name, id} = req.params
	res.send(`Id: ${id}\nName: ${name}`)
})

app.get('/things/:name/:id', (req,res) => {
	res.send(`Id: ${req.params.id}\nName: ${req.params.name}`)
})
*/


app.use('/things', things)
app.use('/views', views)
app.use('/form', formCode)

//Esto sirve para todas las rutas
/*
app.use((req,res,next) => {
	console.log('A new request received at ' + new Date())
	next()
})
*/



//Ejemplo de protocolo para inicio de sesion
app.use('/inicio', (req,res,next) => {
	console.log('A request for inicio received at ' + new Date())
	next()
})
	.get('/inicio', (req,res,next) => {
		res.send('Inicio')
	})




// Esta necesita ponerse despues de TODAS las otras rutas
// Sirve para enviar un mensaje despues de poner una URL que no coincide con ningurna anterior


app.use(bodyParser.json())

app.post('/bodyparser', (req,res,next) => {
	console.log(req.body) // aca muestro en consola la informacion enviada por post
	res.send('Data received\n')
	next()
})



app.get('*', (req,res)=>{
	res.send('Sorry, this is an invalid URL.')
})



app.listen(3000, () => console.log('Listening on port 3000'))