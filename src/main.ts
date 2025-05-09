import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
    methods: '*',
    allowedHeaders: '*',
  });
  await app.listen(process.env.PORT ?? 7434);
}
bootstrap().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
