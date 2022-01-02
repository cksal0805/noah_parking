import React, {useState} from 'react';
import CustomButton from './CustomButton';
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import globalStyles from '../styles/globalStyles';

interface INewParkingModalProps {
  navigation: any;
}
function NewParkingModal({navigation}: INewParkingModalProps) {
  const [visible, setVisible] = useState(false);
  const handlePressNewParkingPositionModalOpen = () => {
    setVisible(true);
  };
  const handlePressFloorButton = () => {
    setVisible(false);
    navigation.navigate('Floor');
  };
  return (
    <>
      <CustomButton
        onPress={handlePressNewParkingPositionModalOpen}
        buttonTitle="새 주차위치 등록"
        style={[styles.newParkingPositionButton, globalStyles.deepBlueButton]}
      />
      <Modal
        animationType="fade"
        visible={visible}
        onRequestClose={() => setVisible(false)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.buttonClose]}
              onPress={() => setVisible(!visible)}>
              <Text style={styles.textStyle}>
                <Icon name="close-outline" size={30} />
              </Text>
            </Pressable>
            <View style={[styles.mainViwe]}>
              <CustomButton
                buttonTitle="현재 위치로 등록"
                style={[styles.button, globalStyles.lightBlueButton]}
                onPress={handlePressFloorButton}
              />
              <CustomButton
                buttonTitle="층수로 등록"
                style={[styles.button, globalStyles.deepBlueButton]}
                onPress={handlePressFloorButton}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}
const styles = StyleSheet.create({
  newParkingPositionButton: {
    position: 'absolute',
    bottom: 40,
    width: '90%',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  mainViwe: {
    alignItems: 'center',
    padding: 35,
  },
  button: {
    width: '100%',
    margin: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    marginBottom: 10,
    alignItems: 'flex-end',
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
export default NewParkingModal;
