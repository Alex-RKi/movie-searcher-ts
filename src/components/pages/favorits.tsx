import React from 'react';
import CardList from '../cards-list';

const Favorits = () => {
  console.log(`favs called!`)
  return (
      <CardList mode={'favoritsList'} />
  );
}
export default Favorits;


