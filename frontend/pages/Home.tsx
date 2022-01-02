import React, {useContext} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import NewParkingModal from '../components/NewParkingModal';
import NoahText from '../components/NoahText';
import ParkingPositionInformation from '../components/ParkingPositionInformation';
import {ParkingPositionContext} from '../contexts/ParkingPositionContext';

function Home({navigation}: NativeStackScreenProps<any>) {
  const {position} = useContext(ParkingPositionContext);

  return (
    <SafeAreaView style={styles.section}>
      <NewParkingModal navigation={navigation} />
      <View style={styles.titleSection}>
        <NoahText style={styles.title}>🚙 NOAH PARKING</NoahText>
      </View>
      <ParkingPositionInformation parkingPosition={position} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  section: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Jua-Regular',
  },
  titleSection: {
    width: '100%',
    padding: 30,
    display: 'flex',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 27,
    fontWeight: '700',
    color: '#2F2F2F',
  },
});

export default Home;
