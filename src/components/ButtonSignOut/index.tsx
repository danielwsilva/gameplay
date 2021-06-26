import React from "react";
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Text, View, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';
import { theme } from "../../global/styles/theme";

type Props = TouchableOpacityProps & {
  title: string;
  border?: boolean;
}

export function ButtonSignOut({ title, border = false,...rest } : Props) {
  return (
    <TouchableOpacity {...rest}>
      <View style={[styles.constainer, border ? {
          borderColor: theme.colors.secondary50,
          borderWidth: 1,
        } : { 
          backgroundColor: theme.colors.primary
        } 
      ]}>
        <Text style={styles.title}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}