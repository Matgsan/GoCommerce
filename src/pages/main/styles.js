import { StyleSheet } from 'react-native';
import { colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 20,
  },
  categories: {
    backgroundColor: colors.primary,
    height: 44,
    alignItems: 'center',
    flex: 1,
  },
  emptyList: {
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default styles;
