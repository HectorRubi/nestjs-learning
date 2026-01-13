import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  getHello(): string {
    const example = this.configService.get<string>('VAR_EXAMPLE');
    const dbHost = this.configService.get<string>('nested.variable');
    return `Hello World! ${example} ${dbHost}`;
  }
}
