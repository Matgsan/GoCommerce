import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import Icon from 'react-native-vector-icons/FontAwesome';
import { bindActionCreators } from 'redux';
import { Creators as CartActions } from 'store/ducks/cart';
import { colors } from 'styles';
import styles from './styles';

class CartItem extends React.Component {
  static propTypes = {
    setQuantity: PropTypes.func.isRequired,
    removeProduct: PropTypes.func.isRequired,
    item: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      brand: PropTypes.string,
      quantity: PropTypes.number,
      price: PropTypes.number
    }).isRequired
  };
  constructor(props) {
    super(props);
    this.setQuantity = debounce(this.props.setQuantity, 500);
  }
  handleQuantityChange = (product, quantity) => {
    const quant = parseInt(quantity, 10);
    this.setQuantity(product, quant || product.quantity);
  };
  render() {
    const { item } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Image style={styles.image} source={{ uri: item.image }} />
          <View style={styles.info}>
            <Text numberOfLines={4} style={styles.name}>
              {item.name}
            </Text>
            <Text style={styles.brand}>{item.brand}</Text>
            <Text style={styles.price}>
              R$
              {item.price}
            </Text>
          </View>
          <View style={styles.controls}>
            <TextInput
              style={styles.quantityInput}
              autoCorrect={false}
              autoCapitalize="none"
              underlineColorAndroid="transparent"
              value={String(item.quantity)}
              onChangeText={text => this.handleQuantityChange(item, text)}
              keyboardType="numeric"
            />
            <TouchableOpacity onPress={() => this.props.removeProduct(item)}>
              <Icon name="times" size={15} color={colors.gray} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(CartItem);
