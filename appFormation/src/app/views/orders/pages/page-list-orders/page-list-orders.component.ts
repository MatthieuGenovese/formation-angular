import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { BtnI } from 'src/app/shared/interfaces/btn-i';
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
  public states = Object.values(StateOrder);
  public btnRoute: BtnI;
  public btnHref: BtnI;
  public btnAction: BtnI;


  constructor(
    private os: OrdersService,
    private us: UserService
  ) { }

  ngOnInit(): void {
    this.implementButtons();
    this.collectionHeaders = [ 'Type', 'Client', 'Nombre de jours', 'tjmHT', 'Total HT', 'Total TTC', 'Etat', 'Date'];
    this.os.collection.subscribe(orders => {
      this.collectionOrder = orders;
      console.log(this.collectionOrder);
    })

    // this.os.getFilterByState(StateOrder.CONFIRMED).subscribe(orders =>{
    //   this.collectionOrder = orders;
    //   console.log(this.collectionOrder);
    // })

  }

  public implementButtons(): void{
    this.btnRoute = {label : 'Add an order', route : 'add' };
    this.btnHref  = {label : 'Go to google', href : 'https://www.google.fr' };
    this.btnAction  = {label : 'Open popup', action : true };
  }

  public changeState(order : Order, event){
    this.os.updateState(order, event.target.value).subscribe(data =>{
      console.log("Before : ", order.state);
      order.state = data.state;
      console.log("After : ", order.state);
    });
  }

  public openPopup(): void{
    console.log('Popup here !');
  }
}
