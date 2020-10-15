import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/shared/models/client.model';
import { ClientsService } from 'src/app/views/orders/services/clients.service';

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrls: ['./page-add-client.component.scss']
})
export class PageAddClientComponent implements OnInit {

  public a: string;
  public b: string;

  constructor(private cs: ClientsService, private router: Router) { }

  ngOnInit(): void {
    this.a= "Clients";
    this.b = "Add a client"
  }

  public createClient(client: Client): void{
    this.cs.addClient(client).subscribe(data =>{
      console.log(data);
      this.router.navigate(['clients']);
    });
  }
}
