import { Controller, Logger, Post, Body } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  private logger = new Logger('AppController');

  constructor() {}

  @EventPattern('sendEmail')
  async sendEmail()  {
    this.logger.log('sent');
    return true;
  }
}
