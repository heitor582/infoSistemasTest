import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, Length, Min } from 'class-validator';

export class CarsDTO {
  @IsString()
  @ApiProperty({
    description: "This is a car's license plate",
  })
  placa: string;

  @IsString()
  @ApiProperty({
    description: "This is a car's chassis",
  })
  chassi: string;

  @IsString()
  @Length(11)
  @ApiProperty({
    description: "This is a car's unique id",
  })
  renavam: string;

  @IsString()
  @ApiProperty({
    description: "This is a car's model",
  })
  modelo: string;

  @IsString()
  @ApiProperty({
    description: "This is a car's brand",
  })
  marca: string;

  @IsInt()
  @Min(0)
  @ApiProperty({
    description: "This is a year of car's release",
  })
  ano: number;

  @IsString({ message: 'Must be date' })
  @IsOptional()
  @ApiPropertyOptional({
    description: 'This is generated and created date of user account',
  })
  created_at?: Date;

  @IsString({ message: 'Must be date' })
  @IsOptional()
  @ApiPropertyOptional({
    description: 'This is generated and updated date of user account',
  })
  updated_at?: Date;
}

export class CreateCarDTO {
  @IsString()
  @ApiProperty({
    description: "This is a car's license plate",
  })
  placa: string;

  @IsString()
  @ApiProperty({
    description: "This is a car's chassis",
  })
  chassi: string;

  @IsString()
  @Length(11)
  @ApiProperty({
    description: "This is a car's unique id",
  })
  renavam: string;

  @IsString()
  @ApiProperty({
    description: "This is a car's model",
  })
  modelo: string;

  @IsString()
  @ApiProperty({
    description: "This is a car's brand",
  })
  marca: string;

  @IsInt()
  @Min(0)
  @ApiProperty({
    description: "This is a year of car's release",
  })
  ano: number;
}

export class PutCarDTO {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    description: "This is a car's license plate",
  })
  placa?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    description: "This is a car's chassis",
  })
  chassi?: string;

  @IsString()
  @Length(11)
  @ApiPropertyOptional({
    description: "This is a car's unique id",
  })
  renavam?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    description: "This is a car's model",
  })
  modelo?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    description: "This is a car's brand",
  })
  marca?: string;

  @IsInt()
  @Min(0)
  @ApiPropertyOptional({
    description: "This is a year of car's release",
  })
  ano?: number;

  @IsString({ message: 'Must be date' })
  @IsOptional()
  @ApiPropertyOptional({
    description: 'This is generated and updated date of user account',
  })
  updated_at?: Date;
}
