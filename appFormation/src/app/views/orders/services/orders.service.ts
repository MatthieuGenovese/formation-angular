import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/shared/models/order.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private pCollection: Observable<Order[]>;
  private urlApi: string = environment.url;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>(`${this.urlApi}orders`).pipe(
      map(datas =>{
        return datas.map(obj =>{
          return new Order(obj);
        })
      })
    );

  }

  public get collection(): Observable<Order[]> {
    return this.pCollection;
  }

  public set collection(col: Observable<Order[]>){
    this.pCollection = col;
  }

  public getById(orderId : number): Observable<Order> {
    return this.http.get<Order>(`${this.urlApi}orders/${orderId}`).pipe(
      map(jsonObject =>{
          return new Order(jsonObject);
      })
    );
  }

  public getByState(state : StateOrder): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.urlApi}orders?state=${state}`).pipe(
      map(datas =>{
        return datas.map(obj =>{
          return new Order(obj);
        })
      })
    );
  }

  //Update

  public update(order: Order): Observable<Order>{
    return this.http.put<Order>(`${this.urlApi}orders/${order.id}`, order);

  }

  //Change State

  public updateState(order: Order, state: StateOrder ): Observable<Order>{
    const obj = new Order({...order});
    obj.state = state;
    return this.update(obj);
  }

}
