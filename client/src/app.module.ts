import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { MathService } from './math.service';
import { EmailModule } from './email/email.module';

@Module({
  imports: [ConfigModule.forRoot(), EmailModule],
  controllers: [AppController],
  providers: [MathService],
})
export class AppModule {}
