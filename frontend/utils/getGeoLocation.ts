import Geolocation from 'react-native-geolocation-service';

export const getGeoLocation = async () => {
  await Geolocation.getCurrentPosition(
    position => {
      const latitudeToParse = JSON.stringify(position.coords.latitude);
      const longitudeToParse = JSON.stringify(position.coords.longitude);
      console.log(latitudeToParse, longitudeToParse);
      return [latitudeToParse, longitudeToParse];
    },
    error => {
      console.log(error.code, error.message);
    },
    {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
  );
};
