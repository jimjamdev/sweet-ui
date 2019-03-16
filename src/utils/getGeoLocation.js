import isClient from './isClient';

const getGeoLocation = () => {
  if (isClient) {
    if ('geolocation' in navigator) {
      /* geolocation is available */
      return navigator.geolocation.getCurrentPosition(success => success, error => error);
    }
    /* geolocation IS NOT available */
    return {
      error: 'GeoLocation is not available',
    };
  }
  return null;
};

export default getGeoLocation;
