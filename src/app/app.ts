import { Component, signal } from '@angular/core';
import { Serie } from './serie/serie';
import { dataSeries } from './serie/dataSeries';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mynewapp');
  series: Serie[] = dataSeries;
  promedioSeasons = 0;

  constructor() {
    const total = this.series.reduce((sum, s) => sum + s.seasons, 0);
    this.promedioSeasons = total / this.series.length;
}
}
