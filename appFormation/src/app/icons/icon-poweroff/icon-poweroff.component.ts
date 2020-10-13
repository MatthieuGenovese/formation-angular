import { Component, OnInit } from '@angular/core';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-poweroff',
  templateUrl: './icon-poweroff.component.html',
  styleUrls: ['./icon-poweroff.component.scss']
})
export class IconPoweroffComponent implements OnInit {

  public myIcon = faPowerOff;
  
  constructor() { }

  ngOnInit(): void {
  }

}
