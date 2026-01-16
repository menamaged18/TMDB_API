/*
  generic class for differenet movies display 
  for example top-rated movies, popular movies
*/
import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageEvent } from '@angular/material/paginator';

import { Movie } from '../../interfaces/movie';
import { MoviesResponse } from '../../interfaces/movies-response';
import { MovieCard } from '../movie-card/movie-card';
import { Pagination } from '../pagination/pagination';
import { ActivatedRoute } from '@angular/router';
import { Moviedata } from '../../services/moviedata';
import { MoviesFetchTypes } from '../../interfaces/MoviesFetchTypes';

@Component({
  selector: 'app-movies-page',
  imports: [CommonModule, MovieCard, Pagination],
  templateUrl: './movies-page.html',
  styleUrl: './movies-page.css',
})
export class MoviesPage implements OnInit{
  fetchFn!: (page: number) => any;
  private route = inject(ActivatedRoute);
  private moviesService = inject(Moviedata);
  
  title = 'Movies';

  moviesData = signal<Movie[]>([]);
  pageIndex = 0;
  length = 0;
  isLoading = false;

  ngOnInit(): void {
    const type = this.route.snapshot.data['type'];
    this.title = this.route.snapshot.data['title'];
    // console.log('Type:', type, 'Title:', this.title);
    if (type === MoviesFetchTypes.Popular) {
      this.fetchFn = this.moviesService.getPopularMovies.bind(this.moviesService);
    }

    if (type === MoviesFetchTypes.TopRated) {
      this.fetchFn = this.moviesService.getTopRatedMovies.bind(this.moviesService);
    }

    this.loadMovies();
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.loadMovies();
  }

  private loadMovies() {
    this.isLoading = true;
    const apiPage = this.pageIndex + 1;

    this.fetchFn(apiPage).subscribe({
      next: (res: MoviesResponse) => {
        this.moviesData.set(res.results);
        this.length = res.total_results;
        this.isLoading = false;
        // console.log("success fetching");
      },
      error: () => {
        this.isLoading = false
      },
    });
  }
}
