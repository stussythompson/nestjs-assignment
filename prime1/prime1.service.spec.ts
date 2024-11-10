import { Test, TestingModule } from '@nestjs/testing';
import { Prime1Service } from './prime1.service';

describe('Prime1Service', () => {
  let service: Prime1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Prime1Service],
    }).compile();

    service = module.get<Prime1Service>(Prime1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
