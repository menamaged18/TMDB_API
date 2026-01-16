import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../../interfaces/movie';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.css'
})
export class MovieCard {
  // movie will be provided by the parent
  @Input({ required: true }) movie!: Movie;

  // TMDB image base URL
  readonly imgBaseUrl = 'https://image.tmdb.org/t/p/w500';
}