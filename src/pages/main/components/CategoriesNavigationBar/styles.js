import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    width: metrics.screenWidth,
    height: 44,
    backgroundColor: colors.primary,
    justifyContent: 'center',
  },
  category: {
    justifyContent: 'center',
    marginHorizontal: 15,
    borderBottomWidth: 5,
    paddingTop: 5,
  },
  categoryActive: {
    borderBottomColor: colors.white,
  },
  categoryInactive: {
    borderBottomColor: colors.primary,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.white,
  },
  titleInactive: {
    color: colors.whiteTransparent,
  },
  error: {
    alignSelf: 'center',
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default styles;
