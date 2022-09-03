import { Request } from 'express';
import {Controller, Get, Query, Redirect, Req} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/a')
  getHello2(@Req() req: Request): string {
    console.log(req.body)
    return this.appService.getHello();
  }

    @Get('redirect/docs')
    @Redirect('https://docs.nestjs.com', 302)
    getDocs(@Query('version') version) {
      if (version && version === '5') {
        return {url: 'https://docs.nestjs.com/v5/'};
      }
    }
}
