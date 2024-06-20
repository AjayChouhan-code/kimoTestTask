import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {fontFamily, fontSize, moderateScale} from '../../utils/Constants';

interface CardHeadingProps {
  heading: string;
}

const CardHeading: React.FC<CardHeadingProps> = ({heading}) => {
  return <Text style={styles.heading}>{heading}</Text>;
};

export default CardHeading;

const styles = StyleSheet.create({
  heading: {
    fontSize: fontSize.large,
    fontFamily: fontFamily.bold,
    marginLeft: moderateScale(16),
    marginBottom: moderateScale(16)
  },
});
