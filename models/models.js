
var path = require('path');
var Sequelize = require('sequelize');


// usar BD sqLite: objeto sequelize
var sequelize = new Sequelize(null, null, null, { dialect: "sqlite", storage: "quiz.sqlite" } );


// importamos la definicion de la tabla
var Quiz = sequelize.import(path.join(__dirname, 'quiz'));

// exportamos para que se pueda utilizar ??
exports.Quiz = Quiz; 


// crea e inicializa la tabla de preguntas Quiz...

sequelize.sync().then( function() {
  Quiz.count().then( function(count) {
    if ( count === 0 ) {
      Quiz.create(
        { pregunta: "Capital de Italia", respuesta: "Roma" })
      .then(function(){ console.log('base datos inicializada') });
    }
  });

});
