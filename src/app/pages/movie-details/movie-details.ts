import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { Moviedata } from '../../services/moviedata';
import { MovieResult2 } from '../../interfaces/movie-response';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.css',
})
export class MovieDetails implements OnInit {
  @Input() id!: string;

  private movieService = inject(Moviedata);
  
  movie = signal<MovieResult2 | null>(null);
  isLoading = signal(false);

  ngOnInit() {
    this.loadMovie();
  }
  
  loadMovie() {
    if (this.id) {
      this.isLoading.set(true);
      this.movieService.getMovie(parseInt(this.id)).subscribe({
        next: (movieData) => {
          this.movie.set(movieData);
          this.isLoading.set(false);
          console.log(movieData)
        },
        error: (error) => {
          console.error('Error loading movie:', error);
          this.isLoading.set(false);
        }
      });
    }
  }
}