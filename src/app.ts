import express from 'express';
import ErrorMiddleware from './middlewares/ErrorMiddleware';
import routes from './Routes/Routes';

const app = express();
app.use(express.json());
app.use(routes);
app.use(ErrorMiddleware.handleError);

export default app;
