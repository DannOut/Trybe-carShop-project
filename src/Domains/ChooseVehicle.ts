import ErrorHandler from '../Helpers/ErrorHandler';
import ICar from '../Interfaces/ICar';
import IMotorcycle from '../Interfaces/IMotorcycle';
import Car from './Car';
import Motorcycle from './Motorcycle';

export default class ChooseVehicle {
  public static createDomain<T>(type: string, vehicle: T) {
    if (type === 'Car') return new Car(vehicle as ICar);
    if (type === 'Motorcycle') {
      return new Motorcycle(vehicle as unknown as IMotorcycle);
    }
    throw new ErrorHandler(404, 'domain not found');
  }
}
