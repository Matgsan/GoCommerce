import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: metrics.basePadding,
    borderRadius: metrics.baseRadius,
    marginBottom: metrics.baseMargin,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 60,
    width: 40,
  },
  info: {
    flex: 1,
    marginHorizontal: metrics.baseMargin,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  quantityInput: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    borderWidth: 0.5,
    borderColor: colors.gray,
    height: 30,
    paddingHorizontal: metrics.basePadding,
    marginHorizontal: metrics.baseMargin,
  },
  brand: {
    fontSize: 11,
    color: colors.gray,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.secondary,
  },
  controls: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default styles;
