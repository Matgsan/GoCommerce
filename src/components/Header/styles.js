import { StyleSheet } from 'react-native';
import { colors } from 'styles';

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.white,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    height: 54,
  },
  headerTitle: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
