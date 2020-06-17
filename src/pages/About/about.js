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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: 'transparent',
    height: 1000,
    width: '100%',
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
          <View style={styles.item} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default AboutPage;
