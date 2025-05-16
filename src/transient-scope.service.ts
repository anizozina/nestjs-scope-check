import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class TransientScopeService {
    id: string;
    constructor () {
        this.id = Math.random().toString(36).substring(2, 15)
        console.log(`👻 TransientScopeService created with id: ${this.id}`)
    }

  execute() {
    console.log(`Transient Scope Service: ${this.id}`)
  }
}
