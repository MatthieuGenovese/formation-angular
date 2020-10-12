import { Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-edition',
  templateUrl: './icon-edition.component.html',
  styleUrls: ['./icon-edition.component.scss']
})
export class IconEditionComponent implements OnInit {

  public myIcon = faEdit;
  constructor() { }

  ngOnInit(): void {
  }

}
