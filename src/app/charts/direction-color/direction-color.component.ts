import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-direction-color',
  templateUrl: './direction-color.component.html',
  styleUrls: ['./direction-color.component.css']
})
export class DirectionColorComponent {
  @Input() data: any;
}