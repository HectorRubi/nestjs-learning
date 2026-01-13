import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { NestedConfig } from './config/nested-config';
import { EnvironmentVariables } from './config/environment-variables';

@Injectable()
export class AppService {
  constructor(
    private readonly configService: ConfigService<EnvironmentVariables, true>,
  ) {}

  getHello(): string {
    const example = this.configService.get('varExample', {
      infer: true,
    });

    const dbHost = this.configService.get('nested.variable', {
      infer: true,
    });

    const nested = this.configService.get<NestedConfig>('nested');

    return `Hello World! ${example} ${dbHost} ${nested.port}`;
  }
}
