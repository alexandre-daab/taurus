import {
  Controller,
  Get,
  Post,
  Req,
  Res,
  Query,
  HttpStatus,
  Header,
} from '@nestjs/common';
import { AppService, Alexa } from './app.service';
import { Request, Response } from 'express';

@Controller('api/v1.0')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(@Query() Key: string): string {
    return this.appService.getHello(Key);
  }

  @Post('createUser')
  @Header('Cache-Control', 'none')
  async getOla(@Req() req: Request, @Res() res: Response): Promise<Response> {
    let user: Alexa = { email: '', name: '' };

    try {
      user = await this.appService.createUser(req.body as Alexa);
      return res.status(HttpStatus.CREATED).json(user);
    } catch (err) {
      if (err.code === 'P2002')
        return res
          .status(HttpStatus.BAD_REQUEST)
          .json({ Message: err.message });
      else
        return res
          .status(HttpStatus.INTERNAL_SERVER_ERROR)
          .json({ Message: err.message });
    }
  }
}
