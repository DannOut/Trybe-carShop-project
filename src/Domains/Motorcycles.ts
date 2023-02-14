import IMotorcycle from '../Interfaces/IMotorcycles';
import Vehicle from './Vehicle';

export default class MotorCycle extends Vehicle {
  private category: ['Street', 'Custom', 'Trail'];
  private engineCapacity: number;

  constructor({
    id,
    model,
    year,
    color,
    status,
    buyValue,
    category,
    engineCapacity,
  }: IMotorcycle) {
    super({ id, model, year, color, status, buyValue });
    this.category = category;
    this.engineCapacity = engineCapacity;
  }

  public getCategory(): ['Street', 'Custom', 'Trail'] {
    return this.category;
  }
  public setCategory(value: ['Street', 'Custom', 'Trail']) {
    this.category = value;
  }

  public getEngineCapacity(): number {
    return this.engineCapacity;
  }
  public setEngineCapacity(value: number) {
    this.engineCapacity = value;
  }
}
