import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Veranstaltung } from '../model/veranstaltung';

@Injectable({
  providedIn: 'root'
})
export class VeranstaltungService {

  private eventUrl: string;

  constructor(private http: HttpClient) {
    this.eventUrl = 'https://event-managerapi.herokuapp.com/events';
  }

  public findAll(): Observable<Veranstaltung[]> {
    return this.http.get<Veranstaltung[]>(this.eventUrl);
  }

  public save(event: Veranstaltung) {
    return this.http.post<Veranstaltung>(this.eventUrl, event);
  }
}
