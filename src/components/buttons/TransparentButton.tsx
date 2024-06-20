import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { colors, fontFamily, fontSize, moderateScale } from '../../utils/Constants'

const TransparentButton : React.FC<{title:string}> = ({title}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text
        style={{
          fontSize: fontSize.large,
          fontFamily: fontFamily.bold,
          color: colors.dark,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default TransparentButton

const styles = StyleSheet.create({
container:{
  marginTop: moderateScale(33),
  width: moderateScale(116),
  height: moderateScale(40),
  borderWidth: 1,
  alignItems:'center',
  justifyContent:'center',
  borderRadius: moderateScale(8),
  borderColor: colors.dark
}
})