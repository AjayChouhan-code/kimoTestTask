import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { colors, fontFamily, moderateScale } from '../../utils/Constants';

const ChipComponent: React.FC<{ text: string }> = ({ text }) => {
  return (
    <View style={styles.ChipComponent}>
      <Text style={styles.chipText}>{text}</Text>
      <Image 
        source={require('../../assets/images/arrow_fwd.png')} 
        style={styles.chipImage} 
        tintColor={colors.dark} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ChipComponent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    padding: moderateScale(24),
    backgroundColor: 'white',
    borderRadius: 8,
  },
  chipText: {
    fontSize: moderateScale(16),
    marginRight: 10,
    fontFamily: fontFamily.regular
  },
  chipImage: {
    width: 18,
    height: 18,
  },
});

export default ChipComponent;
