
// importamos el modelo definido
var models = require('../models/models.js');




// GET /quizes/question
exports.question = function(req, res) {
  models.Quiz.findAll().then( function(quiz) {
    res.render('quizes/question', { title: "pagina pregunta" , pregunta: quiz[0].pregunta });
  });
};




// GET /quizes/answer
exports.answer= function(req, res) {

  var resp = 'Incorrecto';

  models.Quiz.findAll().then( function(quiz) {
    if ( req.query.respuesta === quiz[0].respuesta ) {
      resp = "Correcto";
    }
    res.render('quizes/answer',
        { title: "pagina respuesta", respuesta: resp });
  });
  
};
