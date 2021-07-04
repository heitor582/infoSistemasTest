import { Repository } from 'typeorm';

import { CarsDTO, PutCarDTO } from '../dtos/user.dto';
import { Cars } from './../../entities/cars.entity';

export interface ICars {
  placa: string;
  chassi: string;
  renavam: string;
  modelo: string;
  marca: string;
  ano: number;
  created_at: Date;
  updated_at: Date;
}

export interface ICarsRepository extends Repository<Cars> {
  createNewCar(carDto: CarsDTO): Promise<Cars>;
  getCarById(id: string): Promise<Cars | undefined>;
  getAllCars(): Promise<Array<Cars>>;
  getCarByRenavam(renavam: string): Promise<Cars | undefined>;
  deleteCarById(id: string): void;
  updateCarById(id: string, cars: PutCarDTO): Promise<Cars>;
}
