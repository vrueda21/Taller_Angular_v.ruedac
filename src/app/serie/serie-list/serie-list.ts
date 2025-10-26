import { Component, OnInit} from '@angular/core';
import { Serie } from '../serie';
import { dataSeries } from '../dataSeries';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  standalone: false,
  templateUrl: './serie-list.html',
  styleUrls: ['./serie-list.css'],
})
export class SerieList implements OnInit {
  series: Array<Serie> = [];
  promedioSeasons = 0;

  constructor(private serieService: SerieService) {}


  getSerieslist() {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
      this.promedio();
    });
  }

  private promedio(): void {
    if (this.series.length === 0) {
      this.promedioSeasons = 0;
      return;
    }
    const total = this.series.reduce((sum, s) => sum + s.seasons, 0);
    this.promedioSeasons = total / this.series.length;
  }

  ngOnInit(): void {
    this.getSerieslist();
    this.promedio();
  }



}

