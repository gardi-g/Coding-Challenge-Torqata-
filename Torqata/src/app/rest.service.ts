import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Data {
  player_name: string;
  age: number;
  player_height: number;
  net_rating: number;
}
@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private http : HttpClient) { }
  url = "http://localhost:3000/Players";
  getPlayers(): Observable<Data[]> {
    return this.http.get<Data[]>(this.url);
  }
}
