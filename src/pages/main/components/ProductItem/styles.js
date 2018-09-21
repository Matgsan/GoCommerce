import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    padding: 10,
    margin: 5,
  },
  image: {
    height: 180,
  },
  info: {
    marginTop: metrics.baseMargin,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  brand: {
    fontSize: 11,
    color: colors.gray,
  },
  price: {
    marginTop: metrics.baseMargin,
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.secondary,
  },
});

export default styles;
