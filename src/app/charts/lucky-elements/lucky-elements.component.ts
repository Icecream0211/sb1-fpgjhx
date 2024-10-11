import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lucky-elements',
  templateUrl: './lucky-elements.component.html',
  styleUrls: ['./lucky-elements.component.css']
})
export class LuckyElementsComponent {
  @Input() data: any;

  get chartData() {
    return [
      { Element: '喜用神', Value: this.data.favorable, Color: '#4CAF50' },
      { Element: '忌用神', Value: this.data.unfavorable, Color: '#F44336' }
    ];
  }
}