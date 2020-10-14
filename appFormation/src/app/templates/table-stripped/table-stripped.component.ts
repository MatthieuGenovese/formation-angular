import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-table-stripped',
  templateUrl: './table-stripped.component.html',
  styleUrls: ['./table-stripped.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableStrippedComponent implements OnInit {
  @Input() headers: string[];
  constructor() { }

  ngOnInit(): void {
  }

}
