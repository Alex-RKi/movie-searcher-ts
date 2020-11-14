import React from "react";

interface MDBServiceInterface {
  id: number;
  favoritsList: [] | any;
  page: number;
}
const MDBServiceContext = React.createContext<MDBServiceInterface | null>(
  null
);
export type { MDBServiceInterface };
export { MDBServiceContext };
/*
adult: false
backdrop_path: "/wu1uilmhM4TdluKi2ytfz8gidHf.jpg"
genre_ids: Array(5) [ 14, 16, 12, … ]
id: 400160
original_language: "en"
original_title: "The SpongeBob Movie: Sponge on the Run"
overview: "When his ...."
popularity: 1860.606
poster_path: "/jlJ8nDhMhCYJuzOw3f52CP1W8MW.jpg"
release_date: "2020-08-14"
title: "The SpongeBob Movie: Sponge on the Run"
video: false
vote_average: 8.2
vote_count: 1238
*/