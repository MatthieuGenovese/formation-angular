import { Component, OnInit } from '@angular/core';
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

  public collectionClient: Client[];
  public collectionHeaders: string[];
  public states = Object.values(StateClient);
  public btnRoute: BtnI;

  constructor(
    private cs: ClientsService
  ) { }

  ngOnInit(): void {
    this.implementButtons();
    this.title = "Clients here !"
    this.collectionHeaders = ['State', 'TVA', 'Name', 'CA', 'Comment', 'Total']
    this.cs.collection.subscribe(clients => {
      this.collectionClient = clients;
      console.log(this.collectionClient);
    })
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
  }

}
