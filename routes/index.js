var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');
var authorController = require('../controllers/author_controller');




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'página de incio' });
});



router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);

router.get('/author', authorController.mostrar);


module.exports = router;
