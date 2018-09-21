import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 20,
    margin: 20,
    backgroundColor: colors.white,
  },
  image: {
    height: 285,
  },
  description: {
    marginTop: metrics.baseMargin,
    flexDirection: 'row',
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  brand: {
    fontSize: 12,
    color: colors.gray,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.secondary,
  },
  buttom: {
    color: colors.white,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  buttomContainer: {
    marginTop: metrics.basePadding,
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: colors.secondary,
    height: 44,
  },
});

export default styles;
