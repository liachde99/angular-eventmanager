import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-angular',
  templateUrl: './index-angular.component.html',
  styleUrls: ['./index-angular.component.scss']
})
export class IndexAngularComponent implements OnInit {
  title = "EventManager";

  constructor() { }

  ngOnInit(): void {
  }

}
