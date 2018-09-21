import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, FlatList, Text } from 'react-native';
import Header from 'components/Header';
import { connect } from 'react-redux';
import CartItem from './components/CartItem';
import styles from './styles';

const Cart = ({ cart, subTotal }) => (
  <View style={styles.container}>
    <Header title="Carrinho" />
    <View style={styles.content}>
      <FlatList
        data={cart}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <CartItem item={item} />}
        ListEmptyComponent={
          <Text style={styles.emptyList}>
            Você não tem nenhum produto no carrinho
          </Text>
        }
      />
    </View>
    {cart.length && (
      <View style={styles.subTotalContainer}>
        <Text style={styles.subTotalTitle}>Subtotal</Text>
        <Text style={styles.subTotal}>{subTotal()}</Text>
      </View>
    )}
  </View>
);

const TabBarIcon = ({ tintColor }) => (
  <Icon name="shopping-cart" size={20} color={tintColor} />
);

TabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired
};

Cart.navigationOptions = {
  tabBarIcon: TabBarIcon
};

Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  subTotal: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  cart: state.cart.list,
  subTotal: () => {
    const subTotal = state.cart.list.reduce(
      (total, atual) => total + atual.quantity * atual.price,
      0
    );
    return (
      <Text>
        R$
        {subTotal}
      </Text>
    );
  }
});
export default connect(mapStateToProps)(Cart);
