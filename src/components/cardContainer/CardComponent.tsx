import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { colors, fontFamily, moderateScale } from '../../utils/Constants';

const { width } = Dimensions.get('window');

interface CardComponentProps {
  imageSource: any;
  heading: string;
  subheading: string;
}

const CardComponent: React.FC<CardComponentProps> = ({ imageSource, heading, subheading }) => {
  return (
    <View style={styles.cardContainer}>
      <View>
        <Image source={imageSource} style={styles.topImage} />
        <View style={styles.textContainer}>
          <Text style={styles.heading}>{heading}</Text>
          <Text style={styles.subheading}>{subheading}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.smallImageContainer}>
        <Image source={require('../../assets/images/arrow_fwd.png')} style={styles.smallImage} tintColor={colors.dark} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: moderateScale(290),
    height: moderateScale(300),
    backgroundColor: 'white',
    borderRadius: moderateScale(8),
    shadowColor: colors.dark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  topImage: {
    width: '100%',
    height: moderateScale(150),
    borderTopStartRadius: moderateScale(8),
    borderTopEndRadius: moderateScale(8)
  },
  textContainer: {
    padding: 20,
  },
  heading: {
    fontSize: 18,
    marginBottom: 5,
    fontFamily: fontFamily.bold,
    color: colors.dark,
    lineHeight: moderateScale(20),
  },
  subheading: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
  },
  smallImageContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.light,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginBottom: 20,
    marginRight: 20,
  },
  smallImage: {
    width: 18,
    height: 18,
    borderRadius: 15,
  },
});

export default CardComponent;
