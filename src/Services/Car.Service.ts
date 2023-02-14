import Car from '../Domains/Car';
import ErrorHandler from '../Helpers/ErrorHandler';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM.model';

export default class CarService {
  private createCarDomain(newCar: ICar | null): Car | null {
    if (newCar) {
      return new Car(newCar);
    }
    return null;
  }
  public async create(car: ICar): Promise<Car | null> {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    return this.createCarDomain(newCar);
  }

  public async findAll() {
    const carODM = new CarODM();
    const listAllCar = await carODM.findAll();
    const carsArray = listAllCar.map((car) => this.createCarDomain(car));
    return carsArray;
  }

  public async findById(id: string): Promise<Car | null> {
    const carODM = new CarODM();
    const findCarById = await carODM.findById(id);
    if (!findCarById) throw new ErrorHandler(404, 'Car not found');
    return this.createCarDomain(findCarById);
  }

  public async update(id: string, info: ICar): Promise<Car | null> {
    const carODM = new CarODM();
    const updateCar = await carODM.update(id, info);
    if (!updateCar) throw new ErrorHandler(404, 'Car not found');
    return this.createCarDomain(updateCar);
  }
}
