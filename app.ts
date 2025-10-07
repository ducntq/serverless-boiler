import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users';
import newsRoutes from './routes/news';

const app = express();

app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use('/users', usersRoutes);
app.use('/news', newsRoutes);

export default app;
