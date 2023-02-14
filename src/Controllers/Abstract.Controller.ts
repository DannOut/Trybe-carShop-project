import { NextFunction, Request, Response } from 'express';
import AbstractService from '../Services/Abstract.Service';

export default abstract class AbstractController<T> {
  protected _req: Request;
  protected _res: Response;
  protected next: NextFunction;
  protected _service: AbstractService<T>;

  //  prettier-ignore
  constructor(
    req: Request,
    res: Response,
    next: NextFunction,
    service: AbstractService<T>,
  ) {
    this._req = req;
    this._res = res;
    this.next = next;
    this._service = service;
  }

  public async findAll() {
    try {
      const data = await this._service.findAll();
      return this._res.status(200).json(data);
    } catch (e) {
      this.next(e);
    }
  }

  public async findById() {
    try {
      const { id } = this._req.params;
      const data = await this._service.findById(id);
      return this._res.status(200).json(data);
    } catch (e) {
      this.next();
    }
  }

  public async create() {
    try {
      const newVehicle = this._req.body;
      const data = await this._service.create(newVehicle);
      return this._res.status(201).json(data);
    } catch (e) {
      this.next(e);
    }
  }

  public async update() {
    try {
      const { id } = this._req.params;
      const updatedInfo = this._req.body;
      const data = await this._service.update(id, updatedInfo);
      return this._res.status(200).json(data);
    } catch (e) {
      this.next(e);
    }
  }

  public async remove() {
    try {
      const { id } = this._req.params;
      await this._service.remove(id);
      return this._res.sendStatus(204);
    } catch (e) {
      this.next(e);
    }
  }
}
