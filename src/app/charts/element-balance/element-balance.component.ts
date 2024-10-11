import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-element-balance',
  templateUrl: './element-balance.component.html',
  styleUrls: ['./element-balance.component.css']
})
export class ElementBalanceComponent {
  @Input() data: any;

  get chartData() {
    return [
      { Element: '木', Value: this.data.wood, Color: '#4CAF50' },
      { Element: '火', Value: this.data.fire, Color: '#FF5722' },
      { Element: '土', Value: this.data.earth, Color: '#FFC107' },
      { Element: '金', Value: this.data.metal, Color: '#9E9E9E' },
      { Element: '水', Value: this.data.water, Color: '#2196F3' }
    ];
  }
}