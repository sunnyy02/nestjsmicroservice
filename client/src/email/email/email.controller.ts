import { Controller, Logger, Post } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  private logger = new Logger('AppController');

  constructor(private service: EmailService) {}

  @Post('send')
  async send() {
    this.logger.log('send email');
    const result = this.service.email();
    this.logger.log('sent email result:' + JSON.stringify(result));
  }
}
