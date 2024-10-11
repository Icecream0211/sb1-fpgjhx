import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fortune-heatmap',
  templateUrl: './fortune-heatmap.component.html',
  styleUrls: ['./fortune-heatmap.component.css']
})
export class FortuneHeatmapComponent {
  @Input() data: any;

  get chartData() {
    const result = [];
    for (let year = 2023; year <= 2025; year++) {
      for (let month = 1; month <= 12; month++) {
        result.push({
          Year: year.toString(),
          Month: month.toString(),
          Fortune: this.data[year][month]
        });
      }
    }
    return result;
  }
}