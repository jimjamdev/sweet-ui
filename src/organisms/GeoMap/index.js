import React, { useState, Suspense, useEffect } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import PropTypes from 'prop-types';
import { getGeoLocation } from '../../utils';

// const ReactMapGL = lazy(() => import('react-map-gl'));

const defaultView = {
  longitude: 0,
  latitude: 0,
  zoom: 12,
};


const GeoMap = ({ token }) => {
  const [currentLocation, setCurrentLocation] = useState(defaultView);
  const [viewport, setViewport] = useState(defaultView);

  useEffect(() => {
    getGeoLocation().then((data) => {
      setCurrentLocation({
        ...currentLocation,
        longitude: data.coords.longitude,
        latitude: data.coords.latitude,
      });
      setViewport({
        ...viewport,
        longitude: data.coords.longitude,
        latitude: data.coords.latitude,
      });
    });
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ReactMapGL
        width="auto"
        height="380px"
        latitude={viewport.latitude}
        longitude={viewport.longitude}
        zoom={viewport.zoom}
        showCompass
        showZoom
        mapboxApiAccessToken={token}
        onViewportChange={(newViewport) => {
          const {
            width, height, latitude, longitude, zoom,
          } = newViewport;
          setViewport({
            longitude,
            latitude,
            zoom,
          });
        }}
      >
        {currentLocation.longitude && currentLocation.latitude && (
          <Marker latitude={currentLocation.latitude} longitude={currentLocation.longitude}>
                  You are here
          </Marker>
        )}
      </ReactMapGL>
    </Suspense>
  );
};

GeoMap.propTypes = {
  token: PropTypes.string,
};

GeoMap.defaultProps = {
  token: 'pk.eyJ1IjoiamltamFteiIsImEiOiJjanRiZ2p3MWMwZnM5NDRwZjNicjJkcmN2In0.D_eUO4Y1_M7vYXMaGeBdYw',
};

export default GeoMap;
