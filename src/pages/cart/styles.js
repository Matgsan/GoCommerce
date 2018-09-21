import { StyleSheet } from 'react-native';
import { colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  emptyList: {
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  subTotalContainer: {
    height: 100,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subTotalTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    color: colors.gray,
  },
  subTotal: {
    fontWeight: 'bold',
    color: colors.secondary,
    fontSize: 24,
  },
});

export default styles;
