import React, {
  useState, Suspense, lazy, useEffect,
} from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { getGeoLocation } from '../../utils';

// const ReactMapGL = lazy(() => import('react-map-gl'));


const GeoMap = ({ token }) => {
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    getGeoLocation().then((data) => {
      setCurrentLocation(data.coords);
    });
  }, []);

  const longitude = get(currentLocation, 'longitude', 0);
  const latitude = get(currentLocation, 'latitude', 0);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ReactMapGL
        width="auto"
        height="380px"
        latitude={latitude}
        longitude={longitude}
        zoom={12}
        showCompass
        showZoom
        mapboxApiAccessToken={token}
        onViewportChange={(viewport) => {
          const {
            width, height, latitude, longitude, zoom,
          } = viewport;
            // Optionally call `setState` and use the state to update the map.
        }}
      >
        {longitude && latitude && (
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
