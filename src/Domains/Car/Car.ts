import ICar from '../../Interfaces/ICar';
import AbstractAuto from '../Vehicle/Vehicle';

export default class Car extends AbstractAuto {
  private _doorQty: number;
  private _seatsQty: number;

  constructor({
    id,
    model,
    year,
    color,
    status,
    buyValue,
    doorQty,
    seatsQty,
  }: ICar) {
    super({ id, model, year, color, status, buyValue });
    this._doorQty = doorQty;
    this._seatsQty = seatsQty;
  }

  public get seatsQty(): number {
    return this._seatsQty;
  }
  public set seatsQty(value: number) {
    this._seatsQty = value;
  }

  public get doorQty(): number {
    return this._doorQty;
  }
  public set doorQty(value: number) {
    this._doorQty = value;
  }
}
