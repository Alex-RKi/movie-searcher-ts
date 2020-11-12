  // INCOMING PARAMS: id, lang, query;



export default class MovieDBService {
  _API_URL: string = 'https://api.themoviedb.org/3/movie/';
  _API_URL_SEACRCH: string = 'https://api.themoviedb.org/3/search/movie?';
  _API_KEY: string = '?api_key=a28e64474e37ed0554fd9ce97aa5293b';


  getMovieDescription = async (id: number, lang: 'en-US' | 'ru-RU'  = 'en-US') => {
    const response = await fetch(
      `${this._API_URL}${id}${this._API_KEY}&language=${lang}`);    
    if(!response.ok) throw new Error(`Could not fetch ${this._API_KEY}, staus ${response.status}`);
    console.log('response getMovieDescription - OK - movie-db-service.ts');
    return await response.json();
  }
  getRecommendations = async (id: number, lang: 'en-US' | 'ru-RU'  = 'en-US') => {
    const response = await fetch(
      `${this._API_URL}${id}/recommendations?${this._API_KEY}&language=${lang}&page=1`)
    if(!response.ok) throw new Error(`Could not fetch ${this._API_KEY}, staus ${response.status}`);
    console.log('response getRecommendations - OK - movie-db-service.ts');
    return await response.json();
  }
  getPopular = async (lang: 'en-US' | 'ru-RU'  = 'en-US') => {
  const response = await fetch(
    `${this._API_URL}popular${this._API_KEY}&language=${lang}&page=1`);
  if(!response.ok) throw new Error(`Could not fetch ${this._API_KEY}, staus ${response.status}`);
  console.log('response getPopular - OK - movie-db-service.ts');
  return await response.json();
  }
  searchMovie = async (query: string = '', page: number = 1, lang: 'en-US' | 'ru-RU'  = 'en-US') => {
    // query.length === 0 ? this.getPopular
    const response = await fetch(
      `${this._API_URL_SEACRCH}${this._API_KEY}&language=${lang}&query=${query}&page=1&include_adult=false`);
    if(!response.ok) throw new Error(`Could not fetch ${this._API_KEY}, staus ${response.status}`);
    console.log('response searchMovie - OK - movie-db-service.ts');
    return await response.json();  
  }
}
