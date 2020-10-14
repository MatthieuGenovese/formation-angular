import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlApi: string = environment.url;

  private pCollection : Observable<User[]>;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<User[]>(`${this.urlApi}users`).pipe(
      map(datas =>{
        return datas.map(obj =>{
          return new User(obj);
        })
      })
    );
  }

  public get collection(): Observable<User[]> {
    return this.pCollection;
  }

  public set collection(col: Observable<User[]>){
    this.pCollection = col;
  }

  public getByUsernameAndPassword(name : string, password : string): Observable<User>{
    return this.http.get<User>(`${this.urlApi}users?username=${name}&password=${password}`).pipe(
      map(obj =>{
          return new User(obj);
      })
    );
  }
}
