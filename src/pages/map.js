import React from 'react';
import MapPage from '../components/MapPage/Index'; // Se o arquivo realmente se chama Index.js
import ScrollToTop from '../components/ScrollToTop';

const Map = () => {
  return (
    <>
      <ScrollToTop />
      <MapPage />
    </>
  );
};

export default Map;
