import React from 'react';
import {
  TextStyle,
  NativeSyntheticEvent,
  NativeTouchEvent,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import NoahText from './NoahText';

export interface ICustomButton {
  onPress?: (event: NativeSyntheticEvent<NativeTouchEvent>) => void;
  buttonTitle: string;
  style?: TextStyle[] | TextStyle;
}

const CustomButton = ({
  onPress,
  buttonTitle,
  style,
}: ICustomButton): JSX.Element => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        Array.isArray(style)
          ? [styles.buttonStyle, ...style]
          : [styles.buttonStyle, style]
      }>
      <NoahText style={styles.title}>{buttonTitle}</NoahText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 14,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#ffffff',
  },
});

export default CustomButton;
