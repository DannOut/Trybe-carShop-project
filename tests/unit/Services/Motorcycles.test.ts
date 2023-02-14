import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import ErrorHandler from '../../../src/Helpers/ErrorHandler';
import MotorcycleService from '../../../src/Services/Motorcycle.Service';
import { invalidId } from '../../Mocks/Car.mock';
import {
  mockedArrayMotors,
  motoBody,
  motoOutput,
  validId,
} from '../../Mocks/Motorcycles.mock';

describe('Usuário é capaz de realizar CRUD de moto', function () {
  afterEach(function () {
    Sinon.restore();
  });

  it('É possível registrar uma moto com sucesso', async function () {
    Sinon.stub(Model, 'create').resolves(motoOutput);
    const motoService = new MotorcycleService();
    const result = await motoService.create(motoBody);
    expect(result).to.be.deep.equal(motoOutput);
  });

  it('É possivel buscar todas as motos com sucesso', async function () {
    Sinon.stub(Model, 'find').resolves(mockedArrayMotors);
    const motoService = new MotorcycleService();
    const result = await motoService.findAll();
    expect(result).to.be.deep.equal(mockedArrayMotors);
  });

  it('É possível buscar uma moto pelo id com sucesso', async function () {
    Sinon.stub(Model, 'findOne').resolves(motoOutput);
    const motoService = new MotorcycleService();
    const result = await motoService.findById(validId);
    expect(result).to.be.deep.equal(motoOutput);
  });

  it('Retorna Erro ao buscar com id inválido', async function () {
    Sinon.stub(Model, 'findOne').throws(
      new ErrorHandler(404, 'Motorcycle not found'),
    );
    try {
      const motoService = new MotorcycleService();
      motoService.findById(invalidId);
    } catch (e) {
      expect(e as ErrorHandler).to.be.deep.equal({
        Error: 'Motorcycle not found',
      });
    }
  });
});
