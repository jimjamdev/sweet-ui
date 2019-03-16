import isClient from './isClient';

const getGeoLocation = () => {
  const successful = (position) => {
    console.log(position);
    return position;
  };
  const errored = (error) => {
    console.log(error);
    return error;
  };

  if (isClient) {
    if ('geolocation' in navigator) {
      /* geolocation is available */
      navigator.geolocation.getCurrentPosition(successful, errored);
    }
    /* geolocation IS NOT available */
    return {
      error: 'GeoLocation is not available',
    };
  }
  return null;
};

export default getGeoLocation;
