import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titre-b',
  templateUrl: './titre-b.component.html',
  styleUrls: ['./titre-b.component.scss']
})
export class TitreBComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;

  constructor() { }

  ngOnInit(): void {
  }

}
