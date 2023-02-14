import { Router } from 'express';
import CarController from '../Controllers/Car.Controller';
import MotorcycleController from '../Controllers/Motocycle.Controller';
import validateId from '../Helpers/IdValidation';

const routes = Router();

routes.post('/cars', (req, res, next) => new CarController(req, res, next).create());

routes.get('/cars', (req, res, next) => new CarController(req, res, next).findAll());

routes.get(
  '/cars/:id',
  validateId,
  (req, res, next) => new CarController(req, res, next).findById(),
);

routes.put(
  '/cars/:id',
  validateId,
  (req, res, next) => new CarController(req, res, next).update(),
);

routes.post('/motorcycles', (req, res, next) => new MotorcycleController(req, res, next).create());

routes.get('/motorcycles', (req, res, next) =>
  new MotorcycleController(req, res, next).findAll());

routes.get('/motorcycles/:id', validateId, (req, res, next) =>
  new MotorcycleController(req, res, next).findById());

routes.put('/motorcycles/:id', validateId, (req, res, next) =>
  new MotorcycleController(req, res, next).update());

export default routes;