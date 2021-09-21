import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DeviceService } from './shared/device.service';
import { Device } from './entities/device.entity';
import { UpdateResult } from 'typeorm';

@Controller('devices')
export class DevicesController {
  constructor(private deviceService: DeviceService) {}

  @Get()
  async getAll(): Promise<Device[]> {
    return this.deviceService.getAll();
  }
  @Get(':id')
  async getById(@Param('id') id: number): Promise<Device> {
    return this.deviceService.getById(id);
  }

  @Post()
  async create(@Body() device: Device): Promise<Device> {
    return this.deviceService.createDevice(device);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() device: Device,
  ): Promise<UpdateResult> {
    device.id = id;
    return this.deviceService.updateDevice(device);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    this.deviceService.deleteDevice(id);
  }
}
