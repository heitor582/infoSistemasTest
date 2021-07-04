import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { swaggerOptions } from './config/swagger/swagger.builder';
import { AllExceptionsFilter } from './shared/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  const document = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('api/v1/', app, document);
  app.useGlobalFilters(new AllExceptionsFilter());
  await app.listen(parseInt(process.env.PORT) || 3000);
}
bootstrap();
