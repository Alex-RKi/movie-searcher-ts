interface MDBServiceInterface {
  favoritsList: any;
  popularsList: any;
  page: number;
  toggleFavorit: Function;
  searchMovies: Function;
  searchResults: [];
  recommededList: [];
  saveSearchText: Function;
}
export type { MDBServiceInterface };
