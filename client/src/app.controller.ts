import { Controller, Logger, Post, Body, Get } from '@nestjs/common';

@Controller()
export class AppController {
  private logger = new Logger('AppController');

  constructor() {}

  @Get('hello')
  async hello() {
    this.logger.log('hello');
    return 'hello';
  }
}
