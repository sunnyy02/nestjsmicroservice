import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { EmailModule } from './email/email.module';
import { EmailService } from './email/email/email.service';

@Module({
  imports: [ConfigModule.forRoot(), EmailModule],
  controllers: [AppController],
  providers: [EmailService],
})
export class AppModule {}
