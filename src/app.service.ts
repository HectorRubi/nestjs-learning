import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { NestedConfig } from './config/nested-config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  getHello(): string {
    const example = this.configService.get<string>('VAR_EXAMPLE');
    const dbHost = this.configService.get<string>(
      'nested.variable',
      'defaultHost',
    );
    const nested = this.configService.get<NestedConfig>('nested');

    if (!nested) {
      throw new Error('Nested configuration is missing');
    }

    return `Hello World! ${example} ${dbHost} ${nested.port}`;
  }
}
