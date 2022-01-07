import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { of as ObservableOf } from 'rxjs/observable/of';
import { Wine } from "../models/wine";
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: "root",
})
export class WineService {

  constructor(private httpClient: HttpClient) {
  }

  getWines(query: string): Observable<Wine[]> {
    return this.httpClient.get<Wine[]>('/api/wine', {
      params: {q: query}
    });
  }

  changeQuantity(wineID: number, changeInQuantity: number): Observable<any> {
    return this.httpClient.patch('/api/wine/:' + wineID, {changeInQuantity: changeInQuantity});
  }

  create(wine: Wine): Observable<Wine> {
    return this.httpClient.post<Wine>('/api/product', wine);
  }
}
