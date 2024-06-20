import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {colors, moderateScale} from '../../utils/Constants';
import ItemHeading from '../cardContainer/CardHeading';
import GuideCardComponent from './GuideCardComponent';

const GuideCardContainer: React.FC = () => {
  return (
    <View style={styles.mainContainer}>
      <ItemHeading heading={'Travel Guide'} />
      <GuideCardComponent
        guideName={'Hadwin Malone'}
        duration={'Guide since 2012'}
      />
    </View>
  );
};

export default GuideCardContainer;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.light,
    paddingVertical: moderateScale(40),
    marginBottom: moderateScale(34)
  },
});
