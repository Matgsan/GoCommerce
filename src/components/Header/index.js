import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, View, Text } from 'react-native';

import styles from './styles';

const Header = ({ title }) => (
  <SafeAreaView style={styles.background}>
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  </SafeAreaView>
);
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
