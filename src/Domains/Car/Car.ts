import ICar from '../../Interfaces/ICar';
import AbstractAuto from '../Vehicle/Vehicle';

export default class Car extends AbstractAuto {
  constructor({
    
  }: ICar) {
    super();
  }
}
