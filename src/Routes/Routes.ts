import { Router } from 'express';
import CarController from '../Controllers/Car.controller';
import validateId from '../Helpers/IdValidation';

const routes = Router();

routes.post('/cars', (req, res, next) => new CarController(req, res, next).create());
routes.get('/cars', (req, res, next) => new CarController(req, res, next).findAll());
routes.get(
  '/cars/:id',
  validateId,
  (req, res, next) => new CarController(req, res, next).findById(),
);

export default routes;