import ChooseVehicle from '../Domains/ChooseVehicle';
import Vehicle from '../Domains/Vehicle';
import ErrorHandler from '../Helpers/ErrorHandler';
import AbstractODM from '../Models/AbstractODM';

export default abstract class AbstractService<T> {
  protected serviceODM: AbstractODM<T>;
  private vehicle: string;
  constructor(serviceODM: AbstractODM<T>, vehicle: string) {
    this.serviceODM = serviceODM;
    this.vehicle = vehicle;
  }

  // prettier-ignore
  public async findAll(): Promise<Vehicle[] | null> {
    const teste = await this.serviceODM.findAll();
    return teste.map((value) =>
      ChooseVehicle.createDomain<T>(this.vehicle, value));
  }

  public async findById(id: string): Promise<Vehicle | null> {
    const teste = await this.serviceODM.findById(id);
    if (!teste) throw new ErrorHandler(404, `${this.vehicle} not found`);
    return ChooseVehicle.createDomain<T>(this.vehicle, teste);
  }

  public async create(vehicle: T): Promise<Vehicle | null> {
    const teste = ChooseVehicle.createDomain<T>(this.vehicle, vehicle);
    const created = await this.serviceODM.create(teste as unknown as T);
    return ChooseVehicle.createDomain<T>(this.vehicle, created);
  }

  public async update(id: string, info: T): Promise<Vehicle | null> {
    const updateInfo = await this.serviceODM.update(id, info);
    if (!updateInfo) throw new ErrorHandler(404, `${this.vehicle} not found`);
    return ChooseVehicle.createDomain(this.vehicle, updateInfo);
  }

  public async remove(id: string) {
    const removedInfo = await this.serviceODM.remove(id);
    if (!removedInfo) throw new ErrorHandler(404, `${this.vehicle} not found`);
  }
}
