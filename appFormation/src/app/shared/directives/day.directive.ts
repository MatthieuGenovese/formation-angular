import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appColorDay]'
})
export class DayDirective {

  @Input() appColorDay: number;
  @HostBinding('class') className: string;

  constructor() { }
  ngOnChanges(): void {
    this.className = this.formatClass(this.appColorDay);
  }

  private formatClass(jour: number): string{
    if(jour < 3){
      return `day`;
    }
    return `days`;
  }
}
