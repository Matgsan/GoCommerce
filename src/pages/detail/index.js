import React from 'react';

import PropTypes from 'prop-types';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CartActions } from 'store/ducks/cart';

import styles from './styles';

const Detail = ({ navigation, addProduct }) => {
  const { product } = navigation.state.params;
  const addToCart = () => {
    addProduct(product);
    navigation.navigate('Cart');
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.image} resizeMode="contain" source={{ uri: product.image }} />
        <View style={styles.description}>
          <View style={styles.info}>
            <Text numberOfLines={4} style={styles.name}>
              {product.name}
            </Text>
            <Text style={styles.brand}>{product.brand}</Text>
          </View>
          <Text style={styles.price}>R${product.price}</Text>
        </View>
        <TouchableOpacity style={styles.buttomContainer} onPress={addToCart}>
          <Text style={styles.buttom}>Adicionar ao carrinho</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const TabBarIcon = ({ tintColor }) => <Icon name="home" size={20} color={tintColor} />;
TabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};
Detail.propTypes = {
  navigation: PropTypes.shape({
    product: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      brand: PropTypes.string,
      price: PropTypes.number,
    }),
  }).isRequired,
  addProduct: PropTypes.func.isRequired,
};
Detail.navigationOptions = {
  title: 'Detalhe do produto',
  tabBarIcon: TabBarIcon,
};

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(null, mapDispatchToProps)(Detail);
