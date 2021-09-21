import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '../entities/category.entity';
import { Device } from '../entities/device.entity';

@Injectable()
export class DeviceService {
  constructor(
    @InjectRepository(Device) private deviceRepository: Repository<Device>,
  ) {}

  category1: Category = { id: 0, name: 'Categoria Um' };
  devices: Device[] = [
    // { id: 0, category: this.category1, color: 'blue', partNumber: 7 }
  ];

  getAll() {
    console.log(this.deviceRepository.find());
    return this.deviceRepository.find();
  }
  getById(id: number) {
    return this.deviceRepository.findOne({ id });
  }

  createDevice(device: Device) {
    return this.deviceRepository.save(device);
  }

  updateDevice(deviceUpdated: Device) {
    return this.deviceRepository.update(deviceUpdated.id, deviceUpdated);
  }
  deleteDevice(id: number) {
    return this.deviceRepository.delete(id);
  }
}
