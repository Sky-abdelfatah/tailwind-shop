import { Component, inject, OnInit } from '@angular/core';
import { Movies } from '../services/movies';
import { Imovie } from '../interface/imovie';

@Component({
  selector: 'app-recommendation',
  imports: [],
  templateUrl: './recommendation.html',
  styleUrl: './recommendation.css',
})
export class Recommendation implements OnInit {
  private readonly movies = inject(Movies);
  moviesData: Imovie[] = [];

  ngOnInit(): void {
    this.fetchMovies(); // ✅ لازم تستدعيها هنا
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
