import {
  BadRequestException,
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { carsRepositoryName } from '../../../../utils/repositoriesNames';
import { Cars } from '../../entities/cars.entity';
import { ICarsRepository } from '../../http/interface/cars.interface';
import { CarsDTO, PutCarDTO } from './../../http/dtos/user.dto';

@Injectable()
export class CarsService {
  constructor(
    @Inject(carsRepositoryName)
    private readonly carsRepository: ICarsRepository,
  ) {}

  async createNewCar(carDto: CarsDTO): Promise<Cars> {
    if (carDto.renavam.length !== 11) {
      throw new BadRequestException("Renavam's length is wrong");
    }
    const car = await this.carsRepository.getCarByRenavam(carDto.renavam);
    if (!!car) {
      throw new ConflictException('Car with this renavam already exists');
    }
    return await this.carsRepository.createNewCar(carDto);
  }
  async getAllCars(): Promise<Array<Cars>> {
    return this.carsRepository.getAllCars();
  }
  async getCarById(id: string): Promise<Cars> {
    const car = await this.carsRepository.getCarById(id);
    if (!car) {
      throw new NotFoundException('Car with this id not exists');
    }
    return car;
  }
  async deleteCarById(id: string): Promise<Cars> {
    const car = await this.carsRepository.getCarById(id);
    if (!car) {
      throw new NotFoundException('Car with this id not exists');
    }
    this.carsRepository.deleteCarById(id);
    return car;
  }
  async updateCarById(id: string, cars: PutCarDTO): Promise<Cars> {
    const car = await this.carsRepository.getCarById(id);
    if (!car) {
      throw new NotFoundException('Car with this id not exists');
    }
    cars.updated_at = new Date();
    return this.carsRepository.updateCarById(id, cars);
  }
}
