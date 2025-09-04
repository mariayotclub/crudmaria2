import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import routes from './routes/route.js';
import GeneroRoutes from './routes/GeneroRoutes.js';
import FilmeRoutes from './routes/FilmeRoutes.js'; 


const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

app.use(express.static(join(__dirname, '/public')));
app.set('views', join(__dirname, '/views'));

app.use(GeneroRoutes)
app.use(FilmeRoutes)
app.use(routes)
app.listen(3001)

export default app;