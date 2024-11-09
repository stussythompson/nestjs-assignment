import { Module } from '@nestjs/common';
import { Fibo1Controller } from './fibo1.controller';
import { Fibo1Service } from './fibo1.service';

@Module({
  controllers: [Fibo1Controller],
  providers: [Fibo1Service]
})
export class Fibo1Module {}
