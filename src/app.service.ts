import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { NestedConfig } from './config/nested-config';
import { EnvironmentVariables } from './config/environment-variables';

@Injectable()
export class AppService {
  constructor(
    private readonly configService: ConfigService<EnvironmentVariables>,
  ) {}

  getHello(): string {
    const example = this.configService.get('varExample', '', {
      infer: true,
    });

    const dbHost = this.configService.get('nested.variable', 'defaultHost', {
      infer: true,
    });

    const nested = this.configService.get<NestedConfig>('nested');

    if (!nested) {
      throw new Error('Nested configuration is missing');
    }

    return `Hello World! ${example} ${dbHost} ${nested.port}`;
  }
}
