// src/screens/HomeScreen.tsx
import React from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import CardContainer from '../components/cardContainer/CardContainer';
import {colors, moderateScale} from '../utils/Constants';
import ChipContainer from '../components/chipContainer/ChipContainer';
import GuideCardContainer from '../components/guideCard/GuideCardContainer';
import FilledButton from '../components/buttons/FilledButton';

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <View
          style={styles.mainImageView}>
          <Image
            source={require('../assets/images/head.png')}
            style={styles.mainImage}
          />
        </View>
        <CardContainer />
        <ChipContainer />
        <GuideCardContainer />
      </ScrollView>
      <View
        style={styles.bookButtonContainer}>
        <FilledButton title="Book a trip" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainImage: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
  mainImageView: {
    height: moderateScale(490),
    width: '100%',
  },
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    backgroundColor: colors.light,
  },
  bookButtonContainer: {
    marginHorizontal: moderateScale(16),
    position: 'absolute',
    bottom: 16,
    right: 0,
    left: 0,
  },
});

export default HomeScreen;
