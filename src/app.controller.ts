import { Get, Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { DogsService } from './dogs/dogs.service';
import { json } from 'express';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService, 
    private dogSvc: DogsService) {}

  @Get()
  getHello() {
    return this.dogSvc.hi();
  }
}
