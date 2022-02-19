const express = require('express'),
	router = express.Router()

router.get('/', (req,res) => {
	res.send('GET route on things.\n')
})

router.post('/', (req,res) => {
	res.send('POST route on things.\n')
})

// Esta definicion me permitirá que el id sea un numero de 5 digitos
router.get('/:id([0-9]{5})', (req,res) => {
	res.send(`Id: ${req.params.id}`)
})





module.exports = router