import {
  BadRequestException,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import {
  FakeCarsRepository,
  mockFullCarsFactory,
} from '../../../../shared/fakeRepositories/cars/FakeRepository';

import { carsRepositoryName } from '../../../../utils/repositoriesNames';
import { CarsService } from './cars.service';

describe('CarsService', () => {
  let service: CarsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CarsService,
        {
          provide: carsRepositoryName,
          useClass: FakeCarsRepository,
        },
      ],
    }).compile();

    service = module.get<CarsService>(CarsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Create Cars', () => {
    it('should dont save a car because renavam is with wrong length', async () => {
      const car = mockFullCarsFactory();
      car.renavam = '1234567';
      const result = service.createNewCar(car);
      expect(result).rejects.toBeInstanceOf(BadRequestException);
      expect(result).rejects.toThrowError("Renavam's length is wrong");
    });
    it('should dont save a car because renavam is duplicate', async () => {
      const car = mockFullCarsFactory();
      car.renavam = '12345678912';
      await service.createNewCar(car);
      const result = service.createNewCar(car);
      expect(result).rejects.toBeInstanceOf(ConflictException);
      expect(result).rejects.toThrowError(
        'Car with this renavam already exists',
      );
    });
    it('should save a car in the database', async () => {
      jest.spyOn(service, 'createNewCar');
      const car = mockFullCarsFactory();
      const result = await service.createNewCar(car);
      expect(service.createNewCar).toBeCalled();
      expect(service.createNewCar).toBeCalledWith(car);
      expect(result.placa).toBe(car.placa);
    });
  });
  describe('Get Cars', () => {
    it('Should get all cars', async () => {
      jest.spyOn(service, 'getAllCars');
      const response = await service.getAllCars();
      expect(service.getAllCars).toBeCalled();
      expect(response).toHaveLength(0);
      const car = mockFullCarsFactory();
      await service.createNewCar(car);
      const result = await service.getAllCars();
      expect(result).toHaveLength(1);
    });
  });
  describe('Get car by Id', () => {
    it('should not get a car by id because not exists', async () => {
      const car = mockFullCarsFactory();
      const result = service.getCarById(car.id);
      expect(result).rejects.toBeInstanceOf(NotFoundException);
      expect(result).rejects.toThrowError('Car with this id not exists');
    });
    it('should get a car by id', async () => {
      jest.spyOn(service, 'getCarById');
      const car = mockFullCarsFactory();
      await service.createNewCar(car);
      const result = await service.getCarById(car.id);
      expect(service.getCarById).toBeCalled();
      expect(service.getCarById).toBeCalledWith(car.id);
      expect(result.id).toBe(car.id);
    });
  });
  describe('Delete car by id', () => {
    it('should not delete a car by id because not exists', async () => {
      const car = mockFullCarsFactory();
      const result = service.deleteCarById(car.id);
      expect(result).rejects.toBeInstanceOf(NotFoundException);
      expect(result).rejects.toThrowError('Car with this id not exists');
    });
    it('Should be possible delete car by id', async () => {
      jest.spyOn(service, 'deleteCarById');
      const car = mockFullCarsFactory();
      await service.createNewCar(car);
      const result = await service.deleteCarById(car.id);
      expect(service.deleteCarById).toBeCalled();
      expect(service.deleteCarById).toBeCalledWith(car.id);
      expect(result.id).toBe(car.id);
    });
  });
  describe('Update car by id', () => {
    it('Should not be possible update car by id because not exists', async () => {
      const car = mockFullCarsFactory();
      const result = service.updateCarById(car.id, car);
      expect(result).rejects.toBeInstanceOf(NotFoundException);
      expect(result).rejects.toThrowError('Car with this id not exists');
    });
    it('Should be possible update car by id', async () => {
      jest.spyOn(service, 'updateCarById');
      const car = mockFullCarsFactory();
      const carUpdated = {
        ...mockFullCarsFactory(),
        ano: 2020,
      };
      delete carUpdated.id;
      const oldCar = await service.createNewCar(car);
      const result = await service.updateCarById(car.id, carUpdated);
      expect(service.updateCarById).toBeCalled();
      expect(result.id).toBe(oldCar.id);
      expect(result.ano).not.toBe(oldCar.ano);
    });
  });
});
