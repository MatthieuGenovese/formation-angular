import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titre-a',
  templateUrl: './titre-a.component.html',
  styleUrls: ['./titre-a.component.scss']
})
export class TitreAComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;

  constructor() { }

  ngOnInit(): void {
  }

}
