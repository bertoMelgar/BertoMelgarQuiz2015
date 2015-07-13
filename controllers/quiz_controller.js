

// GET /quizes/question
exports.question = function(req, res) {
  res.render('quizes/question', { 
    title: "pregunta",
    pregunta: 'Capital de españa' });
};


// GET /quizes/answer
exports.answer= function(req, res) {
  if ( req.query.respuesta === 'madrid' ) {
    res.render('quizes/answer', { 
      title: "pagina respuesta",
      respuesta: 'Correcto' });
  }
  else {
    res.render('quizes/answer', { 
      title: "pagina respuesta",
      respuesta: 'Incorrecto' });
  }
};
