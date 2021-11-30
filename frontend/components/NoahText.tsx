import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';

interface INoahText {
  children: React.ReactNode;
  style?: TextStyle;
}
const NoahText = ({children, style, ...otherProps}: INoahText): JSX.Element => {
  return (
    <Text style={[styles.baseText, style]} {...otherProps}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    // fontFamily: 'Jua-Regular',
  },
});
export default NoahText;
