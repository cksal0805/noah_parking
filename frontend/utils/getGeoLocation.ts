import { Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

interface IPosition {
  latitude: number,
  longitude: number
}
export const getGeoLocation = async () => {
  if (Platform.OS === 'ios') {
   await Geolocation.requestAuthorization('whenInUse');
  }
  return new Promise<IPosition>((resolve, reject) => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        resolve({latitude, longitude})
      },
      error => {
        // TODO: 위치 불러오는 도중에 에러가 발생할 경우 유저에게 보여줄 인터페이스 설정 필요
        reject(error)
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  });
};
