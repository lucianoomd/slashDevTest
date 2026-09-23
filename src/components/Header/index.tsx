// components/CustomHeader.js
import React from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { styles } from './styles';

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

export default Header;
