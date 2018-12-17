import { Get, Controller } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Controller()
export class DogsController {
  constructor(private readonly dogSvc: DogsService) {}

  @Get()
  getHello(): Observable<AxiosResponse<any>> {
    return this.dogSvc.hi();
  }
}
