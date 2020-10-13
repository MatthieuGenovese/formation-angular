import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/models/order.model';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {

  public collectionOrder: Order[];
  public collectionHeaders: string[];

  constructor(
    private os: OrdersService
  ) { }

  ngOnInit(): void {
    this.collectionHeaders = [ 'Type', 'Client', 'Nombre de jours', 'tjmHT', 'Total HT', 'Total TTC', 'Etat', 'Date'];
    this.os.collection.subscribe(orders => {
      this.collectionOrder = orders;
      console.log(this.collectionOrder);
    })
  }

}
