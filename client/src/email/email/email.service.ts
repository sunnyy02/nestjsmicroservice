import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices';

@Injectable()
export class EmailService {
  private client: ClientProxy;

  constructor(configService: ConfigService) {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: configService.get('SERVICE_PORT'),
      },
    });
  }

  public email() {
    return this.client.send('sendEmail', '');
  }
}
