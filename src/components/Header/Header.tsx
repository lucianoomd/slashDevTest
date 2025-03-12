// components/CustomHeader.js
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform,
  StatusBar,
  SafeAreaView,
} from 'react-native';

type HeaderProps = {
  title: string;
  backgroundColor?: string;
  textColor?: string;
};

const Header = ({
  title,
  backgroundColor = '#f5f5f5',
  textColor = '#202329',
}: HeaderProps) => {
  return (
    <SafeAreaView style={{backgroundColor}}>
      <StatusBar backgroundColor={backgroundColor} barStyle={'dark-content'} />
      <View style={[styles.container, {backgroundColor}]}>
        <View style={styles.titleContainer}>
          <Text style={[styles.title, {color: textColor}]} numberOfLines={1}>
            {title}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 90,
    paddingTop: 30,
    alignItems: 'center',
    ...Platform.select({
      android: {
        elevation: 4,
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
    }),
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Header;
