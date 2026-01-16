import { Component, inject } from '@angular/core';
import { Moviedata } from '../../services/moviedata';
import { CommonModule } from '@angular/common';
import { MoviesList } from '../movies-list/movies-list';
import { MoviesFetchTypes } from '../../interfaces/MoviesFetchTypes';
  

@Component({
  selector: 'app-home',
  imports: [CommonModule, MoviesList],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home  {
  moviesDataService = inject(Moviedata);
  MoviesFetchTypes = MoviesFetchTypes;
}
