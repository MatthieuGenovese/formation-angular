import { Component, OnInit } from '@angular/core';
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

  constructor(
    private cs: ClientsService
  ) { }

  ngOnInit(): void {
    this.title = "Clients here !"
    this.cs.collection.subscribe(orders => {
      this.collectionClient = orders;
      console.log(this.collectionClient);
    })
  }

}
