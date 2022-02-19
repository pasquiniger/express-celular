const express = require('express'),
	router = express.Router()

router.get('/', (req,res) => res.render('first_view'))

router.get('/dynamic-view', (req,res)=>{
	res.render('dynamic',{
		name: "TutorialsPoint",
		url: "http://www.tutorialspoint.com"
	});
});


router.get('/conditionals', (req,res)=>{
	res.render('conditionals',{
		user: {
			name: "Ayush",
			age: 25
		}
	})
})

router.get('/include', (req,res)=> res.render('content'))


router.get('/test-image', (req,res)=> res.render('testimage'))


module.exports = router