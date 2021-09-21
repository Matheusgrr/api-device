import { Test, TestingModule } from '@nestjs/testing';
import { DeviceService } from './device.service';

describe('DeviceService', () => {
  let provider: DeviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeviceService],
    }).compile();

    provider = module.get<DeviceService>(DeviceService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
