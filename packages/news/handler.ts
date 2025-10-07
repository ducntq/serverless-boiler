import serverless from 'serverless-http';
import express from 'express';
import newsRoutes from './newsRoutes';

const app = express();

app.use('/news', newsRoutes);

export const main = serverless(app);