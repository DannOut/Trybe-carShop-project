import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import ErrorHandler from '../../../src/Helpers/ErrorHandler';
import CarService from '../../../src/Services/Car.Service';
import {
  carBody,
  carOutput,
  invalidId,
  mockedArrayCars,
  validId,
} from '../../Mocks/Car.mock';

describe('Usuário é capaz de realizar CRUD de um carro', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('É possível registrar um carro com sucesso', async function () {
    sinon.stub(Model, 'create').resolves(carOutput);
    const carService = new CarService();
    const result = await carService.create(carBody);

    expect(result).to.be.deep.equal(carOutput);
  });

  it('É possivel buscar todos os carros com sucesso', async function () {
    sinon.stub(Model, 'find').resolves(mockedArrayCars);
    const carService = new CarService();
    const result = await carService.findAll();
    expect(result).to.be.deep.equal(mockedArrayCars);
  });

  it('É possivel buscar um carro pelo id com sucesso', async function () {
    sinon.stub(Model, 'findOne').resolves(carOutput);
    const carService = new CarService();
    const result = await carService.findById(validId);
    expect(result).to.be.deep.equal(carOutput);
  });

  it('Retorna Erro ao buscar com id inválido', async function () {
    sinon.stub(Model, 'findOne').throws(new ErrorHandler(404, 'Car not found'));
    try {
      const carService = new CarService();
      carService.findById(invalidId);
    } catch (e) {
      expect(e as ErrorHandler).to.be.deep.equal({ Error: 'Car not found' });
    }
  });
});
