import { Component, OnInit } from '@angular/core';
import { Veranstaltung } from '../model/veranstaltung';
import { VeranstaltungService } from '../service/veranstaltung.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events: Veranstaltung[];

  constructor(private eventService: VeranstaltungService) { }

  ngOnInit(): void {
    this.eventService.findAll().subscribe(data => {
      this.events = data;
    })
  }

}
