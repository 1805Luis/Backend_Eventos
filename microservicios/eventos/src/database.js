const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo:27017/eventos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Conexión exitosa a MongoDB en el host 'mongo'"))
.catch(err => console.error("❌ Error al conectar con MongoDB:", err));
