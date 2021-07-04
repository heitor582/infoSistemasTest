import { EntityRepository, Repository } from 'typeorm';

import { Cars } from '../entities/cars.entity';
import { CarsDTO, PutCarDTO } from '../http/dtos/user.dto';
import { ICarsRepository } from '../http/interface/cars.interface';

@EntityRepository(Cars)
export class CarsRepository
  extends Repository<Cars>
  implements ICarsRepository
{
  public async createNewCar(carDto: CarsDTO): Promise<Cars> {
    return await this.save(carDto);
  }
  public async getCarById(id: string): Promise<Cars | undefined> {
    return await this.findOne({ where: { id } });
  }
  public async getAllCars(): Promise<Array<Cars>> {
    return await this.find();
  }
  public async deleteCarById(id: string): Promise<void> {
    await this.delete(id);
  }
  public async updateCarById(id: string, cars: PutCarDTO): Promise<Cars> {
    await this.update(id, cars);
    return await this.findOne({ where: { id } });
  }
  public async getCarByRenavam(renavam: string): Promise<Cars | undefined> {
    return await this.findOne({ where: { renavam } });
  }
}
