import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { Creators as CategoriesActions } from 'store/ducks/categories';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';

import styles from './styles';

class Categories extends React.Component {
  static propTypes = {
    getCategoriesRequest: PropTypes.func.isRequired,
    setCurrentCategory: PropTypes.func.isRequired,
    categories: PropTypes.shape({
      currentCategory: PropTypes.shape({
        id: PropTypes.number
      }),
      error: PropTypes.string,
      list: PropTypes.arrayOf(PropTypes.shape())
    }).isRequired
  };
  componentWillMount() {
    this.props.getCategoriesRequest();
  }
  renderItem = category => {
    const { currentCategory } = this.props.categories;
    const isActive = category.id === currentCategory.id;
    return (
      <TouchableOpacity
        style={[
          styles.category,
          isActive ? styles.categoryActive : styles.categoryInactive
        ]}
        onPress={() => this.props.setCurrentCategory(category)}
      >
        <Text style={[styles.title, !isActive ? styles.titleInactive : {}]}>
          {category.title}
        </Text>
      </TouchableOpacity>
    );
  };
  render() {
    const { list, currentCategory, error } = this.props.categories;
    return (
      <View style={styles.container}>
        {error ? (
          <Text style={styles.error}>{error}</Text>
        ) : (
          <FlatList
            horizontal
            data={list}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => this.renderItem(item)}
            extraData={currentCategory}
          />
        )}
      </View>
    );
  }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators(CategoriesActions, dispatch);
const mapStateToProps = state => ({ categories: state.categories });
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
