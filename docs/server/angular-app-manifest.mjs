
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/TMDB_API/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/TMDB_API"
  },
  {
    "renderMode": 2,
    "route": "/TMDB_API/movies/popular"
  },
  {
    "renderMode": 2,
    "route": "/TMDB_API/movies/top-rated"
  },
  {
    "renderMode": 1,
    "route": "/TMDB_API/movies/movieDetails/*"
  },
  {
    "renderMode": 2,
    "redirectTo": "/TMDB_API",
    "route": "/TMDB_API/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24738, hash: '62a7615176c639d8653beaa27d67a4305f494fed0e0a43fd08258c6738962621', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17129, hash: '421b553ddbbb7744b078d410ba84d8f8fd9200d62bf226f560c94915dd7e8740', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'movies/top-rated/index.html': {size: 73962, hash: 'adb231091460f15e9537fc0c106543faa051b6951a61cd846a8bc6995fe60dbf', text: () => import('./assets-chunks/movies_top-rated_index_html.mjs').then(m => m.default)},
    'index.html': {size: 96896, hash: '1b47b9d35733cffa72651292018939e38f92d3cd4f69ffa1d21aa38211511359', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'movies/popular/index.html': {size: 73835, hash: '75f49f27faf9099b17ca081a0b048512fb3f185c0be4080609d295671b167e3b', text: () => import('./assets-chunks/movies_popular_index_html.mjs').then(m => m.default)},
    'styles-SLLURJH4.css': {size: 8162, hash: 'sJG78A/JDng', text: () => import('./assets-chunks/styles-SLLURJH4_css.mjs').then(m => m.default)}
  },
};
