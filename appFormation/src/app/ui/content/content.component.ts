import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  public open: boolean;

  constructor(private us: UserService) { }

  ngOnInit(): void {
    this.open = false;
  }

  public switch(): void{
    this.open = !this.open;
  }

  public connect(): void{
    this.us.getByUsernameAndPassword('user1', 'user1').subscribe(data => {
      localStorage.username = data[0].username;
      localStorage.id = data[0].id;
    })
  }
}
