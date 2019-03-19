import React, {
  Fragment, useState, useEffect,
} from 'react';
import ReactMapGL, { Marker, NavigationControl, FullscreenControl } from 'react-map-gl';
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

  return viewport.longitude && viewport.latitude && (
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
        const { latitude, longitude, zoom } = newViewport;
        setViewport({
          longitude,
          latitude,
          zoom,
        });
      }}
    >
      <Fragment>
        <NavigationControl onViewportChange={setViewport} />
        <FullscreenControl container={document.querySelector('body')[0]} />
        {currentLocation.longitude && currentLocation.latitude && (
          <Marker latitude={currentLocation.latitude} longitude={currentLocation.longitude}>
                You are here
          </Marker>
        )}
      </Fragment>
    </ReactMapGL>
  );
};

GeoMap.propTypes = {
  token: PropTypes.string,
};

GeoMap.defaultProps = {
  token: 'pk.eyJ1IjoiamltamFteiIsImEiOiJjanRiZ2p3MWMwZnM5NDRwZjNicjJkcmN2In0.D_eUO4Y1_M7vYXMaGeBdYw',
};

export default GeoMap;
