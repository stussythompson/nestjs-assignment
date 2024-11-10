import { Module } from '@nestjs/common';
import { Factorial1Controller } from './factorial1.controller';

@Module({
  controllers: [Factorial1Controller]
})
export class Factorial1Module {}
