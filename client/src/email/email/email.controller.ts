import { Controller, Logger, Post } from '@nestjs/common';

@Controller('email')
export class EmailController {
    private logger = new Logger('AppController');
    @Post('send')
    // Define the logic to be executed
    async send()  {
      this.logger.log('send email'); // Log something on every call
      return true; // use math service to calc result & return
    }
}
