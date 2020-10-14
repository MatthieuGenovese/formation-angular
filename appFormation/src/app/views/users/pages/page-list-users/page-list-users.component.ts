import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-page-list-users',
  templateUrl: './page-list-users.component.html',
  styleUrls: ['./page-list-users.component.scss']
})
export class PageListUsersComponent implements OnInit {

  public collectionUser: User[];
  public collectionHeaders: string[];


  constructor(
    private us: UserService
  ) { }

  ngOnInit(): void {
    this.collectionHeaders = [ 'ID', 'Username', 'Role' ];
    this.us.collection.subscribe(users => {
      this.collectionUser= users;
      console.log(this.collectionUser);
    })
  }

}
