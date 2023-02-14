import Motorcycle from '../../src/Domains/Motorcycle';

const validId = '634852326b35b59438fbea2f';

const invalidId = '1111';

const motoBody = {
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.0,
  category: 'Street',
  engineCapacity: 600,
};

const motoOutput = {
  id: '634852326b35b59438fbea2f',
  ...motoBody,
};

const mockedArrayMotors = [motoOutput, motoOutput];

const motoDomain = new Motorcycle(motoOutput);

export {
  validId,
  invalidId,
  motoBody,
  motoOutput,
  mockedArrayMotors,
  motoDomain,
};
