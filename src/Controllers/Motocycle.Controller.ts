import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/Motorcycle.Service';
import AbstractController from './Abstract.Controller';
// import IMotorcycle from '../Interfaces/IMotorcycle';
// import MotorcycleService from '../Services/Motorcycle.Service';

export default class MotorcycleController extends AbstractController<IMotorcycle> {
  constructor(req: Request, res: Response, next: NextFunction) {
    super(req, res, next, new MotorcycleService());
  }
  // private _req: Request;
  // private _res: Response;
  // private next: NextFunction;
  // private _service: MotorcycleService;

  // constructor(req: Request, res: Response, next: NextFunction) {
  //   this._req = req;
  //   this._res = res;
  //   this.next = next;
  //   this._service = new MotorcycleService();
  // }

  // public async create() {
  //   const newMoto: IMotorcycle = {
  //     model: this._req.body.model,
  //     year: this._req.body.year,
  //     color: this._req.body.color,
  //     status: this._req.body.status || false,
  //     buyValue: this._req.body.buyValue,
  //     category: this._req.body.category,
  //     engineCapacity: this._req.body.engineCapacity,
  //   };
  //   try {
  //     const createMoto = await this._service.create(newMoto);
  //     return this._res.status(201).json(createMoto);
  //   } catch (e) {
  //     this.next(e);
  //   }
  // }

  // public async findAll() {
  //   const findAllMotocycles = await this._service.findAll();
  //   return this._res.status(200).json(findAllMotocycles);
  // }

  // public async findById() {
  //   try {
  //     const { id } = this._req.params;
  //     const findMotoById = await this._service.findById(id);
  //     return this._res.status(200).json(findMotoById);
  //   } catch (e) {
  //     this.next(e);
  //   }
  // }

  // public async update() {
  //   try {
  //     const { id } = this._req.params;
  //     const dataToUpdate = this._req.body;
  //     const updatedInfo = await this._service.update(id, dataToUpdate);
  //     return this._res.status(200).json(updatedInfo);
  //   } catch (e) {
  //     this.next(e);
  //   }
  // }
}
