import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 17
  },
  
  titleContent: {
    flexDirection: 'row',
    marginBottom: 23
  },

  title: {
    fontFamily: theme.fonts.title500,
    color: theme.colors.heading,
    fontSize: 24,
  },

  titleSpotlight: {
    fontFamily: theme.fonts.title700,
    fontSize: 24
  },

  button: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});