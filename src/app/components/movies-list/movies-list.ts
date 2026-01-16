import { Component, ElementRef, Input, OnInit, ViewChild, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Movie } from '../../interfaces/movie';
import { MoviesResponse } from '../../interfaces/movies-response';
import { MovieCard } from '../movie-card/movie-card';
import { RouterLink } from "@angular/router";
import { MoviesFetchTypes } from '../../interfaces/MoviesFetchTypes';

@Component({
  selector: 'app-movies-list',
  imports: [CommonModule, MovieCard, RouterLink],
  templateUrl: './movies-list.html',
  styleUrl: './movies-list.css',
})
export class MoviesList implements OnInit{
  @Input({ required: true })
  fetchFn!: (page: number) => any;

  @Input({required: true}) type: MoviesFetchTypes = MoviesFetchTypes.Popular;
  @ViewChild('sliderContainer') sliderContainer!: ElementRef;

  scrollRight() {
    const container = this.sliderContainer.nativeElement;
    // Move by the width of the visible container
    container.scrollBy({ left: container.offsetWidth, behavior: 'smooth' });
  }

  scrollLeft() {
    const container = this.sliderContainer.nativeElement;
    container.scrollBy({ left: -container.offsetWidth, behavior: 'smooth' });
  }

  title = signal("movie");
  url = signal("/");

  moviesData = signal<Movie[]>([]);
  pageIndex = signal(0);

  length = 0;
  isLoading = false;

  ngOnInit(): void {
    if (this.type === MoviesFetchTypes.Popular) {
      this.title.set("Popular Movies");
      this.url.set("movies/popular");
    }

    if (this.type === MoviesFetchTypes.TopRated) {
      this.title.set("Top Rated Movies");
      this.url.set("movies/top-rated");
    }

    this.loadMovies();
  }

  constructor() {
    effect(() => {
      // Whenever pageIndex changes, load the movies
      this.loadMovies(); 
    });
  }  

  private loadMovies() {
    this.isLoading = true;
    const apiPage = this.pageIndex() + 1;

    this.fetchFn(apiPage).subscribe({
      next: (res: MoviesResponse) => {
        this.moviesData.set(res.results);
        this.length = res.total_results;
        this.isLoading = false;
      },
      error: () => (this.isLoading = false),
    });
  }
}
