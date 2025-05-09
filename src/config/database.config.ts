import { registerAs } from '@nestjs/config';

interface DatabaseConfig {
  url: string | undefined;
  type: string;
  ssl: boolean;
  autoLoadEntities: boolean;
  synchronize: boolean;
}

export default registerAs<DatabaseConfig>('database', () => ({
  url: process.env.DATABASE_URL,
  type: 'postgres',
  ssl: true,
  autoLoadEntities: true,
  synchronize: false,
}));
