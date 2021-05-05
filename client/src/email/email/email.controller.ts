import { Controller, Logger, Post } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
    private logger = new Logger('AppController');

    constructor(private service: EmailService) {}

    @Post('send')
    // Define the logic to be executed
    async send()  {
      this.logger.log('send email'); // Log something on every call
      return this.service.email(); // use math service to calc result & return
    }
}
