import React from 'react';

import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CategoriesActions } from 'store/ducks/categories';
import CategoriesNavigationBar from './components/CategoriesNavigationBar';

import styles from './styles';
import ProductItem from './components/ProductItem';

const Main = ({ products, navigation }) => (
  <View style={styles.container}>
    <CategoriesNavigationBar />
    <View style={styles.content}>
      {products.loading ? (
        <ActivityIndicator color="#999" size="large" />
      ) : (
        <FlatList
          numColumns={2}
          data={products.list}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <ProductItem
              product={item}
              onPress={() => navigation.navigate('Detail', { product: item })}
            />
          )}
          ListEmptyComponent={
            <Text style={styles.emptyList}>Não foram encontrados produtos dessa categoria</Text>
          }
        />
      )}
    </View>
  </View>
);

const TabBarIcon = ({ tintColor }) => <Icon name="home" size={20} color={tintColor} />;
TabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};
Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  products: PropTypes.shape({
    list: PropTypes.arrayOf(PropTypes.shape()),
    loading: PropTypes.bool,
  }).isRequired,
};
Main.navigationOptions = {
  title: 'GoCommerce',
  tabBarIcon: TabBarIcon,
};
const mapDispatchToProps = dispatch => bindActionCreators(CategoriesActions, dispatch);
const mapStateToProps = state => ({ products: state.products });
export default connect(mapStateToProps, mapDispatchToProps)(Main);
