import { Controller, Get, Post, Req } from '@nestjs/common';
import { AppService, Alexa } from './app.service';
import { Request } from 'express';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('ola')
  async getOla(@Req() req: Request): Promise<Alexa> {
    return await this.appService.getOla(req.body as Alexa);
  }
}
