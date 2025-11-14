import { useEffect, useState, type ReactNode } from "react";
import type { MovieDTO } from "../services/movie.service";

type MovieGenresProps = {
  movie: MovieDTO,
  children: ReactNode
}

export function MovieGenres({ 
  movie,
  children
}: MovieGenresProps) {

  const [genres, setGenres] = useState<string[]>([]);

  useEffect(() =>{

    if (movie) {
      setGenres(movie.genres.split('|'));
    }

  }, [movie])

  return (
    <div className="highlight-meta text-sm my-3 flex flex-wrap gap-2 items-center">
      {genres.map((genre, index) => (
        <span key={index}
          className="genre bg-white/20 px-3 py-1 rounded-full text-xs font-medium mr-2">
          {genre}
        </span>
      ))}
      {children}
    </div>
  )
}