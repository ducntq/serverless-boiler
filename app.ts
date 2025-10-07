import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users';

const app = express();

app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use('/users', usersRoutes);

export default app;
