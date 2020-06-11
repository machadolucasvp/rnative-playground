import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Animated,
} from 'react-native';
import {Header} from '../../components';

const items = [
  {id: 1, name: 'Testing Long Scroll'},
  {id: 2, name: 'Testing Long Scroll'},
  {id: 3, name: 'Testing Long Scroll'},
  {id: 4, name: 'Testing Long Scroll'},
  {id: 5, name: 'Testing Long Scroll'},
  {id: 6, name: 'Testing Long Scroll'},
  {id: 7, name: 'Testing Long Scroll'},
  {id: 8, name: 'Testing Long Scroll'},
  {id: 9, name: 'Testing Long Scroll'},
  {id: 10, name: 'Testing Long Scroll'},
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    marginBottom: 74,
    height: 24,
    width: '100%',
  },
  itemText: {
    color: 'red',
    fontSize: 24,
  },
});

const AboutPage = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      headerMode: 'none',
    });
  });

  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Header scrollY={scrollY} />
        <ScrollView
          onScroll={Animated.event([
            {nativeEvent: {contentOffset: {y: scrollY}}},
          ])}>
          {items.map((item) => {
            return (
              <View key={item.id} style={styles.item}>
                <Text style={styles.itemText}>{item.name}</Text>
              </View>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default AboutPage;
