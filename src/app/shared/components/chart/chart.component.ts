import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import * as Chart from 'chart.js';
import Dataset from './dataset.model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements AfterViewInit {
  @Input() chartLabels: string[];
  @Input() chartType: string;
  @Input() datasets: Dataset[];
  canvas: any;
  ctx: any;
  @ViewChild('myChart') myChart: ElementRef;

  constructor() {}

  ngAfterViewInit() {
    this.canvas = this.myChart.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    let chart = new Chart(this.ctx, {
      type: this.chartType,
      data: {
        labels: this.chartLabels,
        datasets: this.datasets,
      },
      options: {

      },
    });
  }
}
