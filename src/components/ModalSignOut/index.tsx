import React, { ReactNode } from 'react';
import { View, Modal, ModalProps, TouchableWithoutFeedback } from 'react-native';

import { styles } from './styles';

type Props = ModalProps & {
  children: ReactNode;
}

export function ModalSignOut({ children, ...rest }: Props) {
  return (
    <Modal
      transparent
      statusBarTranslucent
      animationType="fade"
      {...rest}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          {children}
        </View>
      </View>
    </Modal>
  )
}
