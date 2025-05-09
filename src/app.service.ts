import { Injectable, OnModuleInit } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(private dataSource: DataSource) {}

  async onModuleInit() {
    try {
      // Test if the connection is working
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const result = await this.dataSource.query('SELECT NOW()');
      console.log('Database connection successful!');
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      console.log('Current database time:', result[0].now);
    } catch (error) {
      console.error('Database connection failed:', error);
    }
  }
  getHello(): string {
    return 'Hello World!';
  }

  async testDbConnection(): Promise<string> {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const result = await this.dataSource.query('SELECT NOW()');
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      return `Database connection is working! Server time: ${result[0].now}`;
    } catch (error: any) {
      console.error('Database test failed:', error);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      return `Database connection failed: ${error.message}`;
    }
  }
}
