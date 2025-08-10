import { Component, inject, OnInit } from '@angular/core';
import { Movies } from '../services/movies';
import { Imovie } from '../interface/imovie';
import { Recommendation } from '../recommendation/recommendation';

@Component({
  selector: 'app-trendify',
  imports: [Recommendation],
  templateUrl: './trendify.html',
  styleUrl: './trendify.css',
})
export class Trendify implements OnInit {
  private readonly movies = inject(Movies);
  moviesData: Imovie[] = [];

  ngOnInit(): void {
    this.fetchMovies();
  }

  private fetchMovies(): void {
    this.movies.getMovies().subscribe({
      next: (data) => {
        console.log(data.results);
        this.moviesData = data.results;
      },
      error: (error) => {
        console.error('Error fetching movies:', error);
      },
    });
  }
}
