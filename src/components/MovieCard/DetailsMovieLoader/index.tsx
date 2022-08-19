import React from "react";
import ContentLoader from "react-content-loader";

function DetailsMovieLoader() {
  const LoaderProps = {
    backgroundColor: "#6c6c6c",
    foregroundColor: "#ecebeb",
  };

  return (
    <React.Fragment>
      <div className="movie-card-image-container">
        <ContentLoader {...LoaderProps} viewBox= "0 0 300 136" height={136} width='100%'>
          <rect x="20" y="0" rx="4" ry="4" width="240" height="136" />
        </ContentLoader>
      </div>
      <div className="movie-card-info-container">
        <div className="movie-card-information">
          <ContentLoader {...LoaderProps} viewBox= "0 0 300 50" height={50} width={300}>
            <rect x="20" y="0" rx="3" ry="3" width="180" height="12" />
            <rect x="20" y="40" rx="3" ry="3" width="120" height="12" />
            <rect x="20" y="20" rx="3" ry="3" width="80" height="12" />
          </ContentLoader>
        </div>
        <div className="movie-card-description loading">
          <ContentLoader {...LoaderProps} viewBox= "0 0 300 80" height={80}>
            <rect x="5" y="0" rx="12" ry="12" width="240" height="8" />
            <rect x="5" y="16" rx="12" ry="12" width="240" height="8" />
            <rect x="5" y="32" rx="12" ry="12" width="240" height="8" />
            <rect x="5" y="48" rx="12" ry="12" width="240" height="8" />
            <rect x="5" y="64" rx="12" ry="12" width="240" height="8" /> 
          </ContentLoader>
        </div>
      </div>
    </React.Fragment>
  );
}

export default DetailsMovieLoader;
