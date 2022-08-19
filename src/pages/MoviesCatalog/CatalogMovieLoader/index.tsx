import React from "react";
import ContentLoader from "react-content-loader";

function CatalogMovieLoader() {
  const movieLoaderId = Array(8)
    .fill(1)
    .map((x, y) => x + y);

  return (
    <React.Fragment>
      {movieLoaderId.map((movieId) => (
        <div className="catalog-movie-container" key={movieId}>
          <ContentLoader
            width={320}
            height={300}
            viewBox="0 0 320 300"
            backgroundColor="#6c6c6c"
            foregroundColor="#ecebeb"
          >
            <rect x="10" y="220" rx="3" ry="3" width="180" height="16" />
            <rect x="10" y="240" rx="3" ry="3" width="80" height="16" />
            <rect x="10" y="260" rx="3" ry="3" width="120" height="16" />
            <rect x="0" y="26" rx="3" ry="3" width="258" height="168" />
          </ContentLoader>
        </div>
      ))}
    </React.Fragment>
  );
}

export default CatalogMovieLoader;
