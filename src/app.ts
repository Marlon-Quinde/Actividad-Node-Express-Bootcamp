import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/taskRoutes';
import sequelize from './config/database';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api', taskRoutes);

// Sincronizar la base de datos y iniciar el servidor
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
}).catch(error => {
  console.error('Error al sincronizar la base de datos:', error);
}); 