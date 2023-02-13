import express from 'express';
import routes from './Routes/Routes';

const app = express();
app.use(routes);

export default app;
