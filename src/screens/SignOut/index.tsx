import React from 'react';
import { View, Text } from 'react-native';

import { ButtonSignOut } from '../../components/ButtonSignOut';
import { theme } from '../../global/styles/theme';
import { useAuth } from '../../hooks/auth';

import { styles } from './styles';

type Props = {
  closeModal: () => void;
}

export function SignOut({ closeModal }: Props){
  const { signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContent}>
        <Text style={styles.title}>Deseja sair do </Text>
        <Text style={[styles.titleSpotlight, { color: theme.colors.heading }]}>Game</Text>
        <Text style={[styles.titleSpotlight, { color: theme.colors.primary }]}>Play</Text>
      </View>
      
      <View style={styles.button}>
        <ButtonSignOut title="Não" activeOpacity={0.6} onPress={closeModal} border />
        <ButtonSignOut title="Sim" activeOpacity={0.6} onPress={handleSignOut}/>
      </View>
    </View>
  );
}