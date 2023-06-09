import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  // private category: ['Street', 'Custom', 'Trail'];
  private category: string;
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

  public getCategory(): string {
    return this.category;
  }
  public setCategory(value: string) {
    this.category = value;
  }

  public getEngineCapacity(): number {
    return this.engineCapacity;
  }
  public setEngineCapacity(value: number) {
    this.engineCapacity = value;
  }
}
