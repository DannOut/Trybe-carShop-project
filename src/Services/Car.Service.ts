// import Car from "../Domains/Car/Car";
import Car from '../Domains/Car/Car';
import ICar from '../Interfaces/ICar';

export default class CarService {
  public async create(newCar: ICar) {
    if (newCar) {
      return new Car({
        model: newCar.model,
        year: newCar.year,
        color: newCar.color,
        status: newCar.status,
        buyValue: newCar.buyValue,
        doorsQty: newCar.doorsQty,
        seatsQty: newCar.seatsQty,
      });
    }
  }
} 