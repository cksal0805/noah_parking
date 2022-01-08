import React, {createContext, useState} from 'react';
import {IParkingPosition} from 'components/ParkingPositionInformation';
import dayjs from 'dayjs';
import {useNavigation} from '@react-navigation/native';

interface IParkingPositionContextProps {
  children: JSX.Element;
}
interface IHandleSubmitByFloor {
  floor: string;
  details: string;
}
interface IHandleSubmitByPosition {
  latitude: string;
  longitude: string;
}
export const ParkingPositionContext = createContext<any>({});
export function ParkingPositionContextProvider({
  children,
}: IParkingPositionContextProps) {
  const [position, setPosition] = useState<IParkingPosition>({
    type: 'floor',
    position: '',
    date: '',
    details: '',
  });
  const navigation = useNavigation();
  const handleSubmitByFloor = ({floor, details}: IHandleSubmitByFloor) => {
    setPosition({
      type: 'floor',
      date: dayjs().format('YYYY-MM-DD HH:mm'),
      position: floor,
      details,
    });
    navigation.goBack();
  };

  const handleSubmitByPosition = ({
    latitude,
    longitude,
  }: IHandleSubmitByPosition) => {
    setPosition({
      type: 'address',
      date: dayjs().format('YYYY-MM-DD HH:mm'),
      position: latitude,
      details: longitude,
    });
  };
  return (
    <ParkingPositionContext.Provider
      value={{position, handleSubmitByFloor, handleSubmitByPosition}}>
      {children}
    </ParkingPositionContext.Provider>
  );
}
