import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'dotenv';
config();

const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  database: process.env.POSTGRES_DB || 'feast-api',
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  port: parseInt(process.env.POSTGRES_PORT || '', 10) || 5432,
  host: process.env.POSTGRES_HOST || 'localhost',
  autoLoadEntities: true,
  synchronize: true,
};

export { TypeOrmConfig };
