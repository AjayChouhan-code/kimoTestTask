import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {colors, fontFamily, fontSize, moderateScale} from '../utils/Constants';
import GuideCardContainer from '../components/guideCard/GuideCardContainer';
import FilledButton from '../components/buttons/FilledButton';
import CardHeading from '../components/cardContainer/CardHeading';
import ChipWithImage from '../components/chipContainer/ChipWithImage';

const SurfingScreen: React.FC = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <View
          style={styles.subView}>
          <Image
            source={require('../assets/images/surf.png')}
            style={styles.mainImage}
          />
          <View style={styles.overlappingView}>
            <Text
              style={styles.overlappingText}>
              Surfing
            </Text>
          </View>
        </View>
        <View
          style={styles.descriptionContainer}>
          <Text
            style={styles.desText}>
            Hawaii is the capital of modern surfing. This group of Pacific
            islands gets swell from all directions, so there are plenty of
            pristine surf spots for all.
          </Text>
          <CardHeading heading="Top spots" />
          <ChipWithImage text="1. Maui" image = {require('../assets/images/maui.png')}/>
          <ChipWithImage text="2. Kauai" image = {require('../assets/images/kauai.png')}/>
          <ChipWithImage text="3. Honolulu" image = {require('../assets/images/honolulu.png')}/>
        </View>
        <GuideCardContainer />
      </ScrollView>
      <View style={styles.bookButtonContainer}>
        <FilledButton title="Book a trip" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  subView: {
    height: moderateScale(240),
    width: '100%',
  },
  desText: {
    fontSize: fontSize.large,
    fontFamily: fontFamily.regular,
    marginHorizontal: moderateScale(16),
    marginVertical: moderateScale(40),
  },
  descriptionContainer: {
    backgroundColor: 'white',
    paddingBottom: moderateScale(80),
  },
  mainImage: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
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
  overlappingView: {
    width: '100%',
    position: 'absolute',
    top: 100,
  },
  overlappingText: {
    fontSize: 40,
    color: 'white',
    fontFamily: fontFamily.bold,
    opacity: 0.7,
    textAlign: 'center',
  },
});

export default SurfingScreen;
