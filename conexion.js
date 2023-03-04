const mongoose = require('mongoose');

// Crea la cadena de conexión
const connectionString = 'mongodb://localhost:27017/colegio';

// Exporta la conexión
module.exports = mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});