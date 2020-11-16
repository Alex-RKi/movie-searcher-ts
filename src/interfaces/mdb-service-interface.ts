interface MDBServiceInterface {
  id: number;
  favoritsList: any;
  popularsList: any;
  page: number;
  toggleFavorit: Function;
  searchInquire: Function;
  searchResults: [];
}
export type { MDBServiceInterface };
