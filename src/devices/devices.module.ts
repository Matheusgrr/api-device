import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DevicesController } from './devices.controller';
import { DeviceService } from './shared/device.service';
import { Device } from './entities/device.entity';
import { Category } from './entities/category.entity';
import { CategoryService } from './category/category.service';
import { CategoryController } from './category/category.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Category]),
    TypeOrmModule.forFeature([Device]),
  ],
  controllers: [DevicesController, CategoryController],
  providers: [DeviceService, CategoryService],
  exports: [TypeOrmModule],
})
export class DevicesModule {}
