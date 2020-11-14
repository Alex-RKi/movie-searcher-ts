import React from 'react';
interface cardInterface {
  src: string;
  alt: string;
}
const MovieCard = (props: cardInterface) => {
  const { src, alt } = props;
  return (
    <div>
      <img src={src} alt = {alt}/>
      <span>{alt}</span>
    </div>
  )
}

export default MovieCard;