import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import CardComponent from './CardComponent';
import ItemHeading from './CardHeading';
import { moderateScale } from '../../utils/Constants';

const data = [
  {
    id: '1',
    imageSource: require('../../assets/images/one.png'),
    heading: 'Surfing',
    subheading: 'Best Hawaiian islands for surfing.',
  },
  {
    id: '2',
    imageSource: require('../../assets/images/two.png'),
    heading: 'Hula',
    subheading: 'Try it yourself.',
  },
  {
    id: '3',
    imageSource: require('../../assets/images/three.png'),
    heading: 'Vulcanoes',
    subheading: 'Volcanic conditions can change at any time.',
  },
];

const CardContainer: React.FC = () => {
  return (
    <View style={styles.container}>
      <ItemHeading heading ={'Highlights'}/>
      <FlatList
        data={data}
        horizontal
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.cardWrapper}>
            <CardComponent
              imageSource={item.imageSource}
              heading={item.heading}
              subheading={item.subheading}
            />
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: moderateScale(40),
  },
  cardWrapper: {
    marginRight: moderateScale(10),
    marginLeft: moderateScale(16),
    paddingBottom: moderateScale(8),
  },
});

export default CardContainer;
