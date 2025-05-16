import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST })
export class RequestScopeService {
    id: string;
    constructor () {
        this.id = Math.random().toString(36).substring(2, 15)
        console.log(`👻 RequestScopeService created with id: ${this.id}`)
    }

  execute() {
    console.log(`Request Scope Service: ${this.id}`)
  }
}
