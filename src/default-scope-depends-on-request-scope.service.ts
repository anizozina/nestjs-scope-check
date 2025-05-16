import { Injectable, Scope } from '@nestjs/common';
import { RequestScopeService } from './request-scope.service';
@Injectable({ scope: Scope.DEFAULT })
export class DefaultScopeDependsOnRequestScopeService {
    id: string;
    constructor (
        private readonly requestScopeService: RequestScopeService
    ) {
        this.id = Math.random().toString(36).substring(2, 15)
        console.log(`👻 DefaultScopeDependsOnRequestScopeService created with id: ${this.id}. RequestScopeService id: ${this.requestScopeService.id}`)
    }

  execute() {
    console.log(`Default Scope Depends On Request Scope Service: ${this.id}`)
  }
}
