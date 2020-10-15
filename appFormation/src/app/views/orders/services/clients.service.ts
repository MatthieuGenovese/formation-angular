import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/shared/models/client.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private urlApi: string = environment.url;

  private pCollection : Observable<Client[]>;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Client[]>(`${this.urlApi}clients`).pipe(
      map(datas =>{
        return datas.map(obj =>{
          return new Client(obj);
        })
      })
    );

  }

  public get collection(): Observable<Client[]> {
    return this.pCollection;
  }

  public set collection(col: Observable<Client[]>){
    this.pCollection = col;
  }

  public getByState(state : StateClient): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.urlApi}clients?state=${state}`).pipe(
      map(datas =>{
        return datas.map(obj =>{
          return new Client(obj);
        })
      })
    );
  }

  //Update

  public update(client: Client): Observable<Client>{
    return this.http.put<Client>(`${this.urlApi}clients/${client.id}`, client);

  }

  //Change State

  public updateState(client: Client, state: StateClient ): Observable<Client>{
    const obj = new Client({...client});
    obj.state = state;
    return this.update(obj);
  }

  public getFilterByCa(ca: number): Observable<Client[]>{
    return this.http.get<Client[]>(`${this.urlApi}clients`).pipe(
      map(data => data
        .filter(data => data.ca <= ca)
          .map(filterData => new Client(filterData))
        )
    )
  }
}
