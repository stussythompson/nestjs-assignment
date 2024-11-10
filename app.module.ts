import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Fibo1Module } from './fibo1/fibo1.module';
import { Prime1Module } from './prime1/prime1.module';
import { Factorial1Service } from './factorial1/factorial1.service';
import { Factorial1Module } from './factorial1/factorial1.module';

@Module({
  imports: [Fibo1Module, Prime1Module, Factorial1Module],
  controllers: [AppController],
  providers: [AppService, Factorial1Service],
})
export class AppModule {}
