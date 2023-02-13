import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/Car.Service';

export default class CarController {
  private _req: Request;
  private _res: Response;
  private next: NextFunction;
  private _service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this._req = req;
    this._res = res;
    this.next = next;
    this._service = new CarService();
  }

  public async create() {
    const newCar: ICar = {
      model: this._req.body.model,
      year: this._req.body.year,
      color: this._req.body.color,
      status: this._req.body.status || false,
      buyValue: this._req.body.buyValue,
      doorsQty: this._req.body.doorsQty,
      seatsQty: this._req.body.seatsQty,
    };
    try {
      const createCar = await this._service.create(newCar);
      // console.log('createCar :>> ', createCar);
      return this._res.status(201).json(createCar);
    } catch (e) {
      this.next(e);
    }
  }
}
