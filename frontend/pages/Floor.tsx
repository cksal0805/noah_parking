import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import globalStyles from '../styles/globalStyles';
import CustomButton from '../components/CustomButton';
import color from '../styles/color';
import {ParkingPositionContext} from '../contexts/ParkingPositionContext';

function Floor() {
  const [selectedFloor, setSelectedFloor] = useState(0);
  const [details, setDetails] = useState('');

  const {handleSubmitByFloor} = useContext(ParkingPositionContext);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.floorWrapper}>
        {[...new Array(9)].map((_, index) => (
          <View style={styles.floorButtonWrapper}>
            <CustomButton
              key={index}
              buttonTitle={String(index + 1)}
              style={[
                styles.floorButton,
                index === selectedFloor
                  ? globalStyles.deepBlueButton
                  : globalStyles.lightBlueButton,
              ]}
              onPress={() => setSelectedFloor(index)}
            />
          </View>
        ))}
      </View>
      <KeyboardAvoidingView behavior={Platform.select({ios: 'padding'})}>
        <TextInput
          style={styles.detailsInput}
          value={details}
          onChangeText={setDetails}
          placeholder="메모"
        />
      </KeyboardAvoidingView>
      <View style={styles.submitButtonWrapper}>
        <CustomButton
          style={[styles.submitButton, globalStyles.deepBlueButton]}
          buttonTitle="지하로 등록"
          onPress={() =>
            handleSubmitByFloor({
              floor: `B${selectedFloor + 1}`,
              details,
            })
          }
        />
        <CustomButton
          style={[styles.submitButton, globalStyles.blueButton]}
          buttonTitle="지상으로 등록"
          onPress={() =>
            handleSubmitByFloor({
              floor: `L${selectedFloor + 1}`,
              details,
            })
          }
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
  },
  floorWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingTop: 30,
  },
  floorButtonWrapper: {
    flexBasis: '30%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  floorButton: {
    borderRadius: 50,
    width: 70,
    height: 70,
  },
  detailsInput: {
    borderBottomWidth: 1,
    borderBottomColor: color.GREY,
    fontSize: 20,
    width: '80%',
    padding: 10,
  },
  submitButtonWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  submitButton: {
    width: '45%',
  },
});
export default Floor;
