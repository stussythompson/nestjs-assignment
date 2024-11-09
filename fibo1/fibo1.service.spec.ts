import { Test, TestingModule } from '@nestjs/testing';
import { Fibo1Service } from './fibo1.service';

describe('Fibo1Service', () => {
  let service: Fibo1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Fibo1Service],
    }).compile();

    service = module.get<Fibo1Service>(Fibo1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
