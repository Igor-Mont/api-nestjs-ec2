import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// add security group on EC2 to listen this PORT
const PORT = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
}

bootstrap();
