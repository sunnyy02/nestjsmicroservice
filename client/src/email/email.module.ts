import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EmailController } from './email/email.controller';
import { EmailService } from './email/email.service';

@Module({
  controllers: [EmailController],
  providers:[EmailService, ConfigService]
})
export class EmailModule {}
