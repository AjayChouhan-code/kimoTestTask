import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { colors, fontFamily, moderateScale } from '../../utils/Constants';

const ChipWithImage: React.FC<{ text: string, image: any }> = ({ text, image }) => {
  return (
    <View style={styles.ChipComponent}>
      <Text style={styles.chipText}>{text}</Text>
      <Image 
        source={image} 
        style={styles.chipImage} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ChipComponent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: moderateScale(16),
    backgroundColor: 'white',
    borderRadius: moderateScale(8),
    height: moderateScale(63),
    marginHorizontal: moderateScale(16),
    marginBottom: moderateScale(8),
    shadowColor: colors.dark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  chipText: {
    fontSize: moderateScale(16),
    marginRight: 10,
    fontFamily: fontFamily.semiBold,
    color: colors.dark,
  },
  chipImage: {
    width: moderateScale(120),
    height: moderateScale(63),
    borderTopRightRadius: moderateScale(8),
    borderBottomRightRadius: moderateScale(8),
  },
});

export default ChipWithImage;
