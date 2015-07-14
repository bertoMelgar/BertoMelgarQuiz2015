


// GET /author
exports.mostrar = function(req, res) {
  res.render('author/mostrar', {
    nombre: "Berto Melgar",
    foto: "/images/foto.jpg" });
};
