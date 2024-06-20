import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { colors, fontFamily, fontSize, moderateScale } from '../../utils/Constants'

const FilledButton : React.FC<{title:string}> = ({title}) => {
  return (
    <TouchableOpacity
      style={styles.mainContainer}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export default FilledButton

const styles = StyleSheet.create({
  title: {
    fontSize: fontSize.large,
    fontFamily: fontFamily.semiBold,
    color: 'white',
  },
  mainContainer: {
    width: '100%',
    height: moderateScale(40),
    alignItems:'center',
    justifyContent:'center',
    borderRadius: moderateScale(8),
    backgroundColor: colors.dark,
    shadowColor: colors.dark,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    
    elevation: 12,
  },
});