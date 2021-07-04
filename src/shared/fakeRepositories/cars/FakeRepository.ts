import { Cars } from 'src/modules/cars/entities/cars.entity';
import { DeepPartial } from 'typeorm';

import { PutCarDTO } from '../../../modules/cars/http/dtos/user.dto';
import { ICarsRepository } from '../../../modules/cars/http/interface/cars.interface';

export const mockFullCarsFactory = () => ({
  id: '0',
  placa: 'eur-742',
  chassi: '213123123123213',
  renavam: '12345678912',
  modelo: 'argo',
  marca: 'fiat',
  ano: 2021,
  created_at: new Date(),
  updated_at: new Date(),
});

export class FakeCarsRepository implements DeepPartial<ICarsRepository> {
  private cars: Cars[] = [];
  private idCount = 0;

  public createNewCar(carDto: any) {
    ++this.idCount;
    carDto.id = this.idCount.toString();
    this.cars.push(carDto);
    return carDto;
  }
  public getCarById(id: string) {
    return this.cars.find((car) => car.id == id);
  }
  public getAllCars() {
    return this.cars;
  }
  public getCarByRenavam(renavam: string) {
    return this.cars.find((car) => car.renavam === renavam);
  }
  public deleteCarById(id: string) {
    const index: number = this.cars.map((car) => car.id).indexOf(id);
    return this.cars.splice(index, 1);
  }
  public updateCarById(id: string, cars: PutCarDTO) {
    const index: number = this.cars.map((car) => car.id).indexOf(id);
    cars.updated_at = new Date();
    this.cars[index] = { ...this.cars[index], ...cars };
    return this.cars[index];
  }
}
