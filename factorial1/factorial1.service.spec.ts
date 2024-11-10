import { Test, TestingModule } from '@nestjs/testing';
import { Factorial1Service } from './factorial1.service';

describe('Factorial1Service', () => {
  let service: Factorial1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Factorial1Service],
    }).compile();

    service = module.get<Factorial1Service>(Factorial1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
