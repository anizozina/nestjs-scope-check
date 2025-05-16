import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DefaultScopeDependsOnRequestScopeService } from './default-scope-depends-on-request-scope.service';
import { DefaultScopeService } from './default-scope.service';
import { RequestScopeService } from './request-scope.service';
import { TransientScopeService } from './transient-scope.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    RequestScopeService,
    TransientScopeService,
    DefaultScopeService,
    DefaultScopeDependsOnRequestScopeService,
  ],
})
export class AppModule {}
