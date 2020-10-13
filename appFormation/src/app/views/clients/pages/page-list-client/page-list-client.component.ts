import { Component, OnInit } from '@angular/core';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
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

  public collectionTest: Client[];
  constructor(
    private cs: ClientsService
  ) { }

  ngOnInit(): void {
    this.title = "Clients here !"
    this.collectionHeaders = ['State', 'TVA', 'Name', 'CA', 'Comment', 'Total']
    this.cs.collection.subscribe(clients => {
      this.collectionClient = clients;
      console.log(this.collectionClient);
    })
    this.cs.getByState(StateClient.ACTIVE).subscribe(clients => {
      this.collectionTest = clients;
      console.log(this.collectionTest);

    });
  }

}
