// app.routes.ts
import { Routes } from '@angular/router';
import { Home } from '../app/pages/home/home';
import { MoviesPage } from './components/movies-page/movies-page';
import { MoviesFetchTypes } from './interfaces/MoviesFetchTypes';
import { MovieDetails } from './pages/movie-details/movie-details';

export const routes: Routes = [
  { path: '', component: Home }, // Home at root path
  {
    path: 'movies/popular',
    component: MoviesPage,
    data: { type: MoviesFetchTypes.Popular, title: 'Popular Movies' },
  },
  {
    path: 'movies/top-rated',
    component: MoviesPage,
    data: { type: MoviesFetchTypes.TopRated, title: 'Top Rated Movies' },
  },
  {
    path:'movies/movieDetails/:id',
    component: MovieDetails,
    
  },
  { path: '**', redirectTo: '' } // Redirect to home for unknown paths
];