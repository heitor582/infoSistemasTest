import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cars } from './entities/cars.entity';
import { CarsRepository } from './repositories/cars.repository';
import { CarsService } from './service/cars/cars.service';
import { CarsController } from './http/controller/cars/cars.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Cars, CarsRepository])],
  providers: [CarsService],
  controllers: [CarsController],
})
export class CarsModule {}
