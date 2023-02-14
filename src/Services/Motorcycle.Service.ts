import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM.model';

export default class MotorcycleService {
  private createMotorcycle(newMoto: IMotorcycle | null): Motorcycle | null {
    if (newMoto) {
      return new Motorcycle(newMoto);
    }
    return null;
  }

  public async create(moto: IMotorcycle): Promise<Motorcycle | null> {
    const motoODM = new MotorcycleODM();
    const newMoto = await motoODM.create(moto);
    return this.createMotorcycle(newMoto);
  }
}
