import serverless from 'serverless-http';
import express from 'express';
import newsRoutes from './routes/news';

const app = express();

app.use('/news', newsRoutes);

export const main = serverless(app);