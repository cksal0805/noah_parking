import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomButton from './CustomButton';
import NoahText from './NoahText';

export interface IParkingPosition {
  type: 'floor' | 'address';
  position: string;
  date: string;
  details: string;
}
export interface IParkingPositionInformation {
  parkingPosition: IParkingPosition;
}
const ParkingPositionInformation = ({
  parkingPosition,
}: IParkingPositionInformation): JSX.Element => {
  return (
    <View style={styles.parkingInformation}>
      {parkingPosition.date.length ? (
        <>
          <NoahText style={styles.parkingTypeIcon}>
            {parkingPosition.type === 'floor' ? '🏠' : '🚀'}
          </NoahText>
          <NoahText style={styles.subText}>현재 주차 위치는</NoahText>
          <NoahText style={styles.dateText}>
            등록일시: {parkingPosition.date}
          </NoahText>
          {parkingPosition.type === 'floor' ? (
            <NoahText style={styles.parkingPositionTextByFloor}>
              {parkingPosition.position[0]}
              <NoahText style={{color: '#707070'}}>
                {parkingPosition.position[1]}
              </NoahText>
              <NoahText style={styles.detailsText}>
                {parkingPosition.details}
              </NoahText>
            </NoahText>
          ) : (
            <View style={styles.parkingPositionViewByAddress}>
              <NoahText style={styles.parkingPositionTextByAddress}>
                {parkingPosition.position}
              </NoahText>
              <NoahText style={styles.detailsText}>
                {parkingPosition.details}
              </NoahText>
              <CustomButton
                onPress={() => {}}
                buttonTitle="지도로 보기"
                style={styles.mapViewButton}
              />
            </View>
          )}
        </>
      ) : (
        <View>
          <Text>아직 등록된 주차 위치가 없습니다!</Text>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  parkingInformation: {
    position: 'relative',
    backgroundColor: 'white',
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: '100%',
    marginLeft: -100,
    marginVertical: 10,
    padding: 20,
    shadowColor: '#171717',
    shadowOffset: {width: 6, height: 6},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    display: 'flex',
    alignItems: 'flex-end',
    borderRadius: 20,
  },
  dateText: {
    color: '#9B9B9B',
    marginTop: 10,
  },
  detailsText: {
    color: '#9B9B9B',
    marginTop: 10,
    fontSize: 20,
  },
  parkingPositionViewByAddress: {
    marginLeft: 60,
  },
  subText: {
    fontSize: 27,
    fontWeight: '700',
    color: '#707070',
  },
  parkingPositionTextByFloor: {
    fontSize: 120,
    fontWeight: '700',
    color: '#00A9FD',
    marginRight: 40,
  },
  parkingPositionTextByAddress: {
    fontSize: 35,
    fontWeight: '700',
    color: '#707070',
  },
  parkingTypeIcon: {
    position: 'absolute',
    top: -10,
    fontSize: 40,
    left: 80,
  },
  mapViewButton: {
    marginTop: 20,
  },
});

export default ParkingPositionInformation;
