import { useState } from "react";

export const MovieCard = ({ movie }) => {
  const [imageError, setImageError] = useState(false);

  if (movie.Poster === "N/A" || imageError) return null;

  return (
    <div className="flex-shrink-0" style={{ width: "200px", height: "350px" }}>
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-100 rounded-1 img-slider"
        onError={() => setImageError(true)}
      />
    </div>
  );
};
