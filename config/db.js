const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log('Intentando conectar a MongoDB Atlas...');
    await mongoose.connect(process.env.MONGO_URI);
    console.log('¡Base de datos conectada exitosamente a MongoDB Atlas!');
  } catch (error) {
    console.error('❌ Error crítico al conectar a la BD:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;