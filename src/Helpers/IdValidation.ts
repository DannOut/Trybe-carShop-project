import { NextFunction, Request, Response } from 'express';
import ErrorHandler from './ErrorHandler';

const validateId = (req: Request, _res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    if (id.length !== 24) throw new ErrorHandler(422, 'Invalid mongo id');
    next();
  } catch (e) {
    next(e);
  }
};

export default validateId;