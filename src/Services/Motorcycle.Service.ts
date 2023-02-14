// import Motorcycle from '../Domains/Motorcycle';
// import ErrorHandler from '../Helpers/ErrorHandler';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM.model';
import AbstractService from './Abstract.Service';

export default class MotorcycleService extends AbstractService<IMotorcycle> {
  constructor() {
    super(new MotorcycleODM(), 'Motorcycle');
  }
  // private createMotorcycle(newMoto: IMotorcycle | null): Motorcycle | null {
  //   if (newMoto) {
  //     return new Motorcycle(newMoto);
  //   }
  //   return null;
  // }
  // public async create(moto: IMotorcycle): Promise<Motorcycle | null> {
  //   const motoODM = new MotorcycleODM();
  //   const newMoto = await motoODM.create(moto);
  //   return this.createMotorcycle(newMoto);
  // }
  // public async findAll() {
  //   const motoODM = new MotorcycleODM();
  //   const listAllMotors = await motoODM.findAll();
  //   const motosArray = listAllMotors.map((moto) => this.createMotorcycle(moto));
  //   return motosArray;
  // }
  // public async findById(id: string): Promise<Motorcycle | null> {
  //   const motoODM = new MotorcycleODM();
  //   const findMotoById = await motoODM.findById(id);
  //   if (!findMotoById) throw new ErrorHandler(404, 'Motorcycle not found');
  //   return this.createMotorcycle(findMotoById);
  // }
  // public async update(
  //   id: string,
  //   info: IMotorcycle,
  // ): Promise<Motorcycle | null> {
  //   const motoODM = new MotorcycleODM();
  //   const updateMoto = await motoODM.update(id, info);
  //   if (!updateMoto) throw new ErrorHandler(404, 'Motorcycle not found');
  //   return this.createMotorcycle(updateMoto);
  // }
}
