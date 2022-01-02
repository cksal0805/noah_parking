import React, {createContext, useState} from 'react';
import {IParkingPosition} from 'components/ParkingPositionInformation';
import dayjs from 'dayjs';
import {useNavigation} from '@react-navigation/native';

interface IParkingPositionContextProps {
  children: JSX.Element;
}
interface IHandleSubmitToFloor {
  floor: string;
  details: string;
}
export const ParkingPositionContext = createContext({});
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
  const handleSubmitToFloor = ({floor, details}: IHandleSubmitToFloor) => {
    setPosition({
      type: 'floor',
      date: dayjs().format('YYYY-MM-DD HH:mm'),
      position: floor,
      details,
    });
    navigation.goBack();
  };
  return (
    <ParkingPositionContext.Provider value={{position, handleSubmitToFloor}}>
      {children}
    </ParkingPositionContext.Provider>
  );
}
