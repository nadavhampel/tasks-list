import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS to allow frontend requests
  app.enableCors({
    origin: ['http://localhost:4001', 'http://localhost:3000'], // Allow both Next.js dev ports
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
