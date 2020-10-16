import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { throwIfEmpty } from 'rxjs/operators';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {

  public title: string;
  public subtitle: string

  constructor(private us: UserService, private router: Router) { }

  ngOnInit(): void {
    this.title= "Login";
    this.subtitle="";
  }

  public login(user: User): void{
    this.us.getByUsernameAndPassword(user.username, user.password).subscribe(data =>{
      console.log(data);
      if(data[0]){
        console.log("ok");
        localStorage.id = data[0].id;
        localStorage.username = data[0].username;
        this.router.navigate(['home']);
      }
    })
  }

}
