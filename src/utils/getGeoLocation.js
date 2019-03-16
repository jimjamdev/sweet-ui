import isClient from './isClient';

const getGeoLocation = () => {
  if (isClient) {
    if ('geolocation' in navigator) {
      /* geolocation is available */
    } else {
      /* geolocation IS NOT available */
    }
  }
  return null;
};

export default getGeoLocation;
