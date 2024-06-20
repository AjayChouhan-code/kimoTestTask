import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import TransparentButton from '../buttons/TransparentButton';
import {fontFamily, fontSize, moderateScale} from '../../utils/Constants';

const GuideCardComponent: React.FC<{guideName: string; duration: string}> = ({
  guideName,
  duration,
}) => {
  return (
    <View
      style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Text style={styles.guideName}>
          {guideName}
        </Text>
        <Text
          style={styles.guideDuration}>
          {duration}
        </Text>
        <TransparentButton title={'Contact'} />
      </View>
      <View>
        <Image
          source={require('../../assets/images/guide.png')}
          style={styles.avatar}
        />
      </View>
    </View>
  );
};

export default GuideCardComponent;

const styles = StyleSheet.create({
  avatar: {
    width: moderateScale(74),
    height: moderateScale(74),
  },
  guideDuration: {
    fontSize: fontSize.large,
    fontFamily: fontFamily.regular,
    marginTop: moderateScale(15),
  },
  guideName: {
    fontSize: fontSize.xxlarge,
    fontFamily: fontFamily.bold,
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    marginHorizontal: moderateScale(16),
    borderRadius: moderateScale(8),
    padding: moderateScale(24),
  },
  subContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});
