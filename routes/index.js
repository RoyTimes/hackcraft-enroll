var express = require('express');
var fs = require ('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/enroll', function (req, res) {

	var getName = req.body.name;
	var getEmail = req.body.email;
	var getQQ = req.body.qq;
	var getGender = req.body.gender;
	var getPhone = req.body.phone;

	console.log("name: " + getName + " Email: " + getEmail + " QQ: "
				+ getQQ + " Phone: " + getPhone + " Gender: " + getGender);

	var data = {
		name: getName,
		email: getEmail,
		qq: getQQ,
		phone: getPhone,
		gender: getGender
	};
	console.log(data);

	fs.appendFile('namelist.json', data, function(err){
		if (err) {console.log(err);	res.render('enroll', {err:true});}
		else {console.log("Data saved");res.render('enroll', {err:false});}
	});

});


module.exports = router;
