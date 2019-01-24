import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Data} from '../models/data';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) {
  }

  getAllPlanets(): Observable<Data> {
    const url = `https://swapi.co/api/planets/`;
    return this.http.get<Data>(url);
  }

  getPlanetByName(name: string): Observable<Data> {
    const url = `https://swapi.co/api/planets/?search=${name}`;
    return this.http.get<Data>(url);
  }
}
