import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  const config = new DocumentBuilder().setTitle('Doctor API').addBearerAuth().build();
  const doc = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, doc);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
