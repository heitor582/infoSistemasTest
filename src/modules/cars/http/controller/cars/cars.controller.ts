import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiResponse,
} from '@nestjs/swagger';
import { Cars } from 'src/modules/cars/entities/cars.entity';
import { ValidationParamsPipe } from 'src/shared/pipes/validation-param.pipe';

import { CreateCarDTO, PutCarDTO } from '../../dtos/user.dto';
import { CarsService } from './../../../service/cars/cars.service';
import { CarsDTO } from './../../dtos/user.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Returns all car stock',
    type: CarsDTO,
  })
  @ApiBadRequestResponse()
  async getAllCars(): Promise<Array<Cars>> {
    return this.carsService.getAllCars();
  }

  @Post()
  @ApiCreatedResponse({
    description: 'Register new car',
    type: CarsDTO,
  })
  @ApiBadRequestResponse()
  @ApiBody({ type: [CreateCarDTO] })
  async createNewCars(@Body() createCarDto: CreateCarDTO): Promise<Cars> {
    return this.carsService.createNewCar(createCarDto);
  }

  @Delete('/:id')
  @ApiResponse({
    status: 200,
    description: 'Delete a car by id',
    type: CarsDTO,
  })
  @ApiBadRequestResponse()
  async deleteById(
    @Param('id', ValidationParamsPipe) id: string,
  ): Promise<Cars> {
    return await this.carsService.deleteCarById(id);
  }

  @Get('/:id')
  @ApiResponse({
    status: 200,
    description: 'Returns a car with specified id',
    type: CarsDTO,
  })
  async getCarById(
    @Param('id', ValidationParamsPipe) id: string,
  ): Promise<Cars> {
    return await this.carsService.getCarById(id);
  }
  @Put(':id')
  @ApiBody({ type: PutCarDTO })
  @ApiCreatedResponse({
    description: 'Update a car',
    type: CarsDTO,
  })
  @UsePipes(ValidationPipe)
  async updateCarById(
    @Body() carsDTO: PutCarDTO,
    @Param('id', ValidationParamsPipe) id: string,
  ): Promise<Cars> {
    return await this.carsService.updateCarById(id, carsDTO);
  }
}
