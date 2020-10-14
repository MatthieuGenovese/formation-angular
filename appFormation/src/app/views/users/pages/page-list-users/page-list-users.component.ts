import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { Role } from 'src/app/shared/enums/role.enum';
import { BtnI } from 'src/app/shared/interfaces/btn-i';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-page-list-users',
  templateUrl: './page-list-users.component.html',
  styleUrls: ['./page-list-users.component.scss']
})
export class PageListUsersComponent implements OnInit {

  public collectionUser: User[];
  public collectionHeaders: string[];
  public roles = Object.values(Role);
  public btnAdduser: BtnI;


  constructor(
    private us: UserService
  ) { }

  ngOnInit(): void {
    this.collectionHeaders = [ 'ID', 'Username', 'Role' ];
    this.btnAdduser = { label : 'Add user', route : 'add'};
    this.us.collection.subscribe(users => {
      this.collectionUser= users;
      console.log(this.collectionUser);
    })
  }

  public updateRole(user: User, event): void{
    
  }

}
