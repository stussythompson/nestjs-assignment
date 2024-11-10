import { Test, TestingModule } from '@nestjs/testing';
import { Factorial1Controller } from './factorial1.controller';

describe('Factorial1Controller', () => {
  let controller: Factorial1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Factorial1Controller],
    }).compile();

    controller = module.get<Factorial1Controller>(Factorial1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
