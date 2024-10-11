import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-future-fortune',
  templateUrl: './future-fortune.component.html',
  styleUrls: ['./future-fortune.component.css']
})
export class FutureFortuneComponent {
  @Input() data: any;

  get chartData() {
    return [
      { Year: '2023', Overall: this.data[2023].overall, Wealth: this.data[2023].wealth, Health: this.data[2023].health, Love: this.data[2023].love },
      { Year: '2024', Overall: this.data[2024].overall, Wealth: this.data[2024].wealth, Health: this.data[2024].health, Love: this.data[2024].love },
      { Year: '2025', Overall: this.data[2025].overall, Wealth: this.data[2025].wealth, Health: this.data[2025].health, Love: this.data[2025].love }
    ];
  }
}