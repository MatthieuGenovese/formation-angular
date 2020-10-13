import { StateOrder } from '../enums/state-order.enum';
import { OrderI } from '../interfaces/order-i';

export class Order implements OrderI{
  id: number;
  tjmHT = 500;
  nbJours = 1;
  tva = 20;
  state = StateOrder.OPTION;
  typePresta: string;
  client: string;
  comment: string;
  date: Date;

  totalHT(): number {
    return this.tjmHT * this.nbJours;
  }
  totalTTC(): number {
    return this.totalHT() * (1 + this.tva/100);
  }

  constructor(obj?: Partial<Order>){
    if(obj){
      Object.assign(this, obj);
    }
  }

}
