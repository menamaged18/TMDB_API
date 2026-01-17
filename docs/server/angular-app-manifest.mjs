
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
    "renderMode": 2,
    "redirectTo": "/TMDB_API",
    "route": "/TMDB_API/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24738, hash: '28edbb1408232f4bc007f8247aea697cbd0e2f779ab52e835fbfa61bcb568529', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17129, hash: '6fa32edcebfaab6dc28834a3f13050ed61e2ebefea8808f8fe09d2890303893c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'movies/popular/index.html': {size: 71368, hash: '101e66adc49cf615df00e2068f33ed463f3e0b55e8d4f27f3f35fbc563d681c5', text: () => import('./assets-chunks/movies_popular_index_html.mjs').then(m => m.default)},
    'index.html': {size: 92848, hash: '0000ad864a99c4603038650b94f6e1d97fb63bd6c3b7f320ceab6a1f5b66682a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'movies/top-rated/index.html': {size: 71494, hash: 'efb13dfc47c3510b94058a0aae3bf11fc868507849b546ffb913dcf842347263', text: () => import('./assets-chunks/movies_top-rated_index_html.mjs').then(m => m.default)},
    'styles-SLLURJH4.css': {size: 8162, hash: 'sJG78A/JDng', text: () => import('./assets-chunks/styles-SLLURJH4_css.mjs').then(m => m.default)}
  },
};
