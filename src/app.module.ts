import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DevicesModule } from './devices/devices.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    DevicesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'mameu123',
      database: 'api-devicedb',
      autoLoadEntities: true,
      synchronize: true,
      migrations: ['/src/migrations/*.js'],
      cli: {
        entitiesDir: '/src/devices/entities',
        migrationsDir: '/src/migrations',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
