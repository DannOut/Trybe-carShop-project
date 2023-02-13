import Car from '../../src/Domains/Car';

const validId = '6348513f34c397abcad040b2';

const invalidId = '1111';

const carBody = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.99,
  doorsQty: 4,
  seatsQty: 5,
};

const carOutput = {
  id: '6348513f34c397abcad040b2',
  ...carBody,
};

const mockedArrayCars = [carOutput, carOutput];

const carDomain = new Car(carOutput);

const mockedCarDomains = [carDomain];

export {
  validId,
  invalidId,
  carBody,
  carOutput,
  mockedArrayCars,
  carDomain,
  mockedCarDomains,
};