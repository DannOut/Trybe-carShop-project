import IVehicle from '../../Interfaces/IVehicle';

export default class Vehicle {
  protected _id: string | undefined;
  protected _model: string;
  protected _year: number;
  protected _color: string;
  protected _status: boolean;
  protected _buyValue: number;

  constructor(
    { id,
      model,
      year,
      color,
      status = false,
      buyValue }: IVehicle,
  ) {
    this._id = id;
    this._model = model;
    this._year = year;
    this._color = color;
    this._status = status;
    this._buyValue = buyValue;
  }

  public get id(): string | undefined {
    return this._id;
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  public get model(): string {
    return this._model;
  }
  public set model(value: string) {
    this._model = value;
  }

  public get year(): number {
    return this._year;
  }
  public set year(value: number) {
    this._year = value;
  }

  public get color(): string {
    return this._color;
  }
  public set color(value: string) {
    this._color = value;
  }

  public get status(): boolean {
    return this._status;
  }
  public set status(value: boolean) {
    this._status = value;
  }

  public get buyValue(): number {
    return this._buyValue;
  }
  public set buyValue(value: number) {
    this._buyValue = value;
  }
}