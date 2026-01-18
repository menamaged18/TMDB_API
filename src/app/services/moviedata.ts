import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { MoviesResponse } from '../interfaces/movies-response';
import { MovieResult, MovieResult2 } from '../interfaces/movie-response';

@Injectable({
  providedIn: 'root',
})
export class Moviedata {
  private baseUrl = 'https://api.themoviedb.org/3';
  private http = inject(HttpClient);

  getPopularMovies(pageNum: number): Observable<MoviesResponse> {
    return this.http.get<MoviesResponse>(
      `${this.baseUrl}/movie/popular?api_key=${environment.apiKey}&page=${pageNum}`
    );
  }
  getTopRatedMovies(pageNum: number): Observable<MoviesResponse> {
    return this.http.get<MoviesResponse>(
      `${this.baseUrl}/movie/top_rated?api_key=${environment.apiKey}&page=${pageNum}`
    );
  }
  getMovie(id: number): Observable<MovieResult2> {
    return this.http.get<MovieResult2>(
      `${this.baseUrl}/movie/${id}?api_key=${environment.apiKey}`
    );
  }
}
