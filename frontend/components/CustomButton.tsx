import React from 'react';
import {
  TextStyle,
  NativeSyntheticEvent,
  NativeTouchEvent,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import NoahText from './NoahText';

const colorTheme: any = {
  background: {
    deepBlue: '#1C1C3E',
    lightBlue: '#5CADFF',
    blue: '#00A9FD',
  },
  text: {
    deepBlue: '#fff',
    lightBlue: '#fff',
    blue: '#fff',
  },
};

export interface IDynamicStyles {
  color: 'deepBlue' | 'lightBlue' | 'blue';
}
export interface ICustomButton extends IDynamicStyles {
  onPress?: (event: NativeSyntheticEvent<NativeTouchEvent>) => void;
  buttonTitle: string;
  style?: TextStyle;
}

const CustomButton = ({
  onPress,
  buttonTitle,
  style,
  color,
}: ICustomButton): JSX.Element => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles({color}).buttonStyle, style]}
    >
      <NoahText style={styles({color}).title}>{buttonTitle}</NoahText>
    </TouchableOpacity>
  );
};

const styles = ({color}: IDynamicStyles) =>
  StyleSheet.create({
    buttonStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colorTheme.background[color],
      padding: 10,
      borderRadius: 14,
    },
    title: {
      fontSize: 24,
      color: colorTheme.text[color],
      fontWeight: '700',
    },
  });

export default CustomButton;
