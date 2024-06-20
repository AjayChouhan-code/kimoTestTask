import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import ChipComponent from './ChipComponent'
import { colors, moderateScale } from '../../utils/Constants';
import ItemHeading from '../cardContainer/CardHeading'

const data = [
  {
    id: '1',
    title: 'Adventure',
  },
  {
    id: '2',
    title: 'Culinary',
  },
  {
    id: '3',
    title: 'Eco-tourism',
  },
  {
    id: '4',
    title: 'Family',
  },
  {
    id: '5',
    title: 'Sport',
  },
];

const ChipContainer: React.FC = () => {
return (
  <View style={styles.mainContainer}>
      <ItemHeading heading ={'Categories'}/>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.cardWrapper}>
              <ChipComponent text = {item.title}/>
          </View>
        )}
        contentContainerStyle={styles.container}
        showsHorizontalScrollIndicator={false}
      />
    </View>
)
}

export default ChipContainer

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: moderateScale(40),

  },
  cardWrapper: {
    width: '90%',
    alignSelf: 'center',
  },
  container: {
    gap: 10,
  },
});