import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { BtnI } from 'src/app/shared/interfaces/btn-i';
import { Client } from 'src/app/shared/models/client.model';
import { ClientsService } from 'src/app/views/orders/services/clients.service';

@Component({
  selector: 'app-page-list-client',
  templateUrl: './page-list-client.component.html',
  styleUrls: ['./page-list-client.component.scss']
})
export class PageListClientComponent implements OnInit {

  public title: string;
  public collectionClientObservable: Observable<Client[]>;
  //public collectionClient: Client[];
  public collectionHeaders: string[];
  public states = Object.values(StateClient);
  public btnRoute: BtnI;
  public btnFilter: BtnI;
  public clicked: boolean;
  public a: string;
  public b: string;

  constructor(
    private cs: ClientsService
  ) { }

  ngOnInit(): void {
    this.a = "Clients";
    this.b = "List of Clients";
    this.clicked = false;
    this.implementButtons();
    this.title = "Clients here !"
    this.collectionHeaders = ['State', 'TVA', 'Name', 'CA', 'Comment', 'Total']
    this.collectionClientObservable = this.cs.collection;
  }

  public changeState(client : Client, event){
    this.cs.updateState(client, event.target.value).subscribe(data =>{
      console.log("Before : ", client.state);
      client.state = data.state;
      console.log("After : ", client.state);
    });
  }

  public implementButtons(): void{
    this.btnRoute = {label : 'Add a client', route : 'add' };
    this.btnFilter = { label : 'Filter by CA', action : true }
  }

  public filterByCA(ca: number): void{
    this.clicked = !this.clicked;
    if(this.clicked){
      this.collectionClientObservable = this.cs.getFilterByCa(ca);
      return
      };
    this.collectionClientObservable= this.cs.collection;
    }
}
