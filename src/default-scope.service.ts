import { Injectable, Scope } from '@nestjs/common';

@Injectable()
export class DefaultScopeService {
    id: string;
    constructor () {
        this.id = Math.random().toString(36).substring(2, 15)
        console.log(`👻 DefaultScopeService created with id: ${this.id}`)
    }

  execute() {
    console.log(`Default Scope Service: ${this.id}`)
  }
}
