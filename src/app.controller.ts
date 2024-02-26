import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable, of } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): Observable<any[]> {
    return of([{}]);
  }

}
