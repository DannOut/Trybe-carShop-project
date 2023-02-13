import { NextFunction, Request, Response } from 'express';
// import ErrorHandler from '../Helpers/ErrorHandler';
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
      return this._res.status(201).json(createCar);
    } catch (e) {
      this.next(e);
    }
  }

  public async findAll() {
    const findAllCars = await this._service.findAll();
    return this._res.status(200).json(findAllCars);
  }

  public async findById() {
    try {
      const { id } = this._req.params;
      const findCarById = await this._service.findById(id);
      return this._res.status(200).json(findCarById);
    } catch (e) {
      this.next(e);
    }
  }
}
