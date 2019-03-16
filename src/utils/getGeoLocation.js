// utils.js
const getGeoLocation = () => new Promise((resolve, reject) => {
  navigator.geolocation.watchPosition(resolve, reject);
});
export default getGeoLocation;
