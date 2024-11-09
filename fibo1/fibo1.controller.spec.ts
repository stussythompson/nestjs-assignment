import { Test, TestingModule } from '@nestjs/testing';
import { Fibo1Controller } from './fibo1.controller';

describe('Fibo1Controller', () => {
  let controller: Fibo1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Fibo1Controller],
    }).compile();

    controller = module.get<Fibo1Controller>(Fibo1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
