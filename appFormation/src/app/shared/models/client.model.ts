import { StateClient } from '../enums/state-client.enum';
import { ClientI } from '../interfaces/client-i';

export class Client implements ClientI {
  tva = 20;
  name: string;
  ca: number;
  comment: string;
  id: number;
  state =  StateClient.ACTIVE;

  constructor(obj?: Partial<Client>){
    if(obj){
      Object.assign(this, obj);
    }
  }

  total(): number {
    return this.ca * (1 + this.tva/100);
  }
}
