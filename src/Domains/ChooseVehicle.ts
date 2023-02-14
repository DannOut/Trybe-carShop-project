import ErrorHandler from '../Helpers/ErrorHandler';
import ICar from '../Interfaces/ICar';
import IMotorcycle from '../Interfaces/IMotorcycle';
import Car from './Car';
import Motorcycle from './Motorcycle';

export default class ChooseVehicle {
  public static createDomain<T>(info: string, vehicle: T) {
    if (info === 'Car') return new Car(vehicle as unknown as ICar);
    if (info === 'Motorcycle') {
      return new Motorcycle(vehicle as unknown as IMotorcycle);
    }
    throw new ErrorHandler(404, 'domain not found');
  }
}
