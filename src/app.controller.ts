import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
// import { Logger } from 'nestjs-pino'


@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    // private readonly logger: Logger,
  ) { }

  @Get()
  async getHello(): Promise<string> {
    // this.logger.debug('Hello World!');
    return await this.appService.getHello();
  }
}
