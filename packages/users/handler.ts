import serverless from 'serverless-http';
import express from 'express';
import usersRoutes from './userRoutes';

const app = express();

app.use('/users', usersRoutes);

export const main = serverless(app);