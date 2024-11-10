import { Module } from '@nestjs/common';
import { Prime1Controller } from './prime1.controller';
import { Prime1Service } from './prime1.service';

@Module({
  controllers: [Prime1Controller],
  providers: [Prime1Service]
})
export class Prime1Module {}
