import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DefaultScopeDependsOnRequestScopeService } from './default-scope-depends-on-request-scope.service';
import { RequestScopeService } from './request-scope.service';
import { DefaultScopeService } from './default-scope.service';
import { TransientScopeService } from './transient-scope.service';
@Controller()
export class AppController {
  constructor(
    private readonly defaultScopeService: DefaultScopeService,
    private readonly requestScopeService: RequestScopeService,
    private readonly transientScopeService: TransientScopeService,
    private readonly defaultScopeDependsOnRequestScopeService: DefaultScopeDependsOnRequestScopeService,
  ) {}

  @Get('default')
  getDefault() {
    return this.defaultScopeService.execute();
  }

  @Get('request')
  getRequest() {
    return this.requestScopeService.execute();
  }

  @Get('transient')
  getTransient() {
    return this.transientScopeService.execute();
  }

  @Get('default-depends-on-request')
  getDefaultDependsOnRequest() {
    return this.defaultScopeDependsOnRequestScopeService.execute();
  }
}
