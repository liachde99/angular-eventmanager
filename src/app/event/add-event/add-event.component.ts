import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VeranstaltungService } from '../service/veranstaltung.service';
import { Veranstaltung } from '../model/veranstaltung';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  event: Veranstaltung;

  constructor(private router: Router,
    private eventService: VeranstaltungService) { }

  ngOnInit(): void {
    this.event = new Veranstaltung();
    this.event.open = true;
  }

  submitEvent() {
    this.eventService.save(this.event).subscribe(data => {
      this.event = data;
      confirm(this.event.name + " wurde gespeichert");
      this.router.navigate(['events']);
    })
  }
}
