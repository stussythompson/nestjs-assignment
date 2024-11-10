import { Test, TestingModule } from '@nestjs/testing';
import { Prime1Controller } from './prime1.controller';

describe('Prime1Controller', () => {
  let controller: Prime1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Prime1Controller],
    }).compile();

    controller = module.get<Prime1Controller>(Prime1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
