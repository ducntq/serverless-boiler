import serverless from 'serverless-http';
import express from 'express';
import usersRoutes from './routes/users';

const app = express();

app.use('/users', usersRoutes);

export const main = serverless(app);