import ICar from '../../Interfaces/ICar';
import Vehicle from '../Vehicle/Vehicle';

export default class Car extends Vehicle {
  private _doorsQty: number;
  private _seatsQty: number;

  constructor({
    id,
    model,
    year,
    color,
    status,
    buyValue,
    doorsQty,
    seatsQty,
  }: ICar) {
    super({ id, model, year, color, status, buyValue });
    this._doorsQty = doorsQty;
    this._seatsQty = seatsQty;
  }

  public get seatsQty(): number {
    return this._seatsQty;
  }
  public set seatsQty(value: number) {
    this._seatsQty = value;
  }

  public get doorQty(): number {
    return this._doorsQty;
  }
  public set doorQty(value: number) {
    this._doorsQty = value;
  }
}
