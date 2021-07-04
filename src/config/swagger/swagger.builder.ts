import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerOptions = new DocumentBuilder()
  .setTitle('Backend test for info-sistemas')
  .setDescription('This api consists in a crud of cars')
  .setVersion('1.0.0')
  .build();
