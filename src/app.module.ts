import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './config/typeorm/typeorm';
import { CarsModule } from './modules/cars/cars.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(TypeOrmConfig),
    CarsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
