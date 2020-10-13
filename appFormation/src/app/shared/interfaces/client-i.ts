import { StateClient } from '../enums/state-client.enum';

export interface ClientI {
  tva: number;
  name: string;
  ca: number;
  comment: string;
  id: number;
  state : StateClient;

  totalHT() : number;

  totalTTC(): number;
}
