import React from 'react';
import {View, Text, ScrollView} from 'react-native';
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

const AboutPage = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      headerMode: 'none',
    });
  });

  return (
    <>
      <Header />
      <ScrollView>
        {items.map((item) => {
          <View key={item.id}>
            <Text>{item.name}</Text>
          </View>;
        })}
      </ScrollView>
    </>
  );
};

export default AboutPage;
