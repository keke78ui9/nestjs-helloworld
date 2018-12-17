import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //await app.listen(5055);
  await app.listen(PORT, HOST);
}
bootstrap();
