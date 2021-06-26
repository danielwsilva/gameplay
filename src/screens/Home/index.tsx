import React, { useState, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Appointment, AppointmentProps } from '../../components/Appointment';
import { CategorySelect } from '../../components/CategorySelect';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';
import { Load } from '../../components/Load';
import { SignOut } from '../SignOut';

import { ModalSignOut } from '../../components/ModalSignOut';

import { styles } from './styles';
import { COLLECTION_APPOINTMENTS } from '../../configs/database';

export function Home() {
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [appointments, setAppointments] = useState<AppointmentProps[]>([]);
  const [openGuildsModal, setOpenGuildsModal] = useState(false);

  const navigation = useNavigation();

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleAppointmentDetails(guildSelected: AppointmentProps) {
    navigation.navigate('AppointmentDetails', { guildSelected });
  }

  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate');
  }

  function handleOpenGuilds() {
    setOpenGuildsModal(true);
  }

  function handleCloseGuilds() {
    setOpenGuildsModal(false);
  }

  async function loadAppointmentes() {
    const respose = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const storage: AppointmentProps[] = respose ? JSON.parse(respose) : [];

    if(category) {
      setAppointments(storage.filter(item => item.category === category));
    } else {
      setAppointments(storage);
    }

    setLoading(false);
  }

  useFocusEffect(useCallback(() => {
    loadAppointmentes();
  }, [category]));

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile openGuilds={handleOpenGuilds} />
        <ButtonAdd onPress={handleAppointmentCreate}/>
      </View>

      <CategorySelect 
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      {
        loading ? <Load /> :
        <>
          <ListHeader 
            title="Partidas agendadas" 
            subtitle={`Total ${appointments.length}`}
          />

          <FlatList 
            data={appointments}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            style={styles.matches}
            ItemSeparatorComponent={() => <ListDivider />}
            contentContainerStyle={{ paddingBottom: 69 }}
            renderItem={({item}) => (
              <Appointment 
                data={item}
                onPress={() => handleAppointmentDetails(item)}
              />
            )}
          />
        </>
      }

      <ModalSignOut visible={openGuildsModal}>
        <SignOut closeModal={handleCloseGuilds}/>
      </ModalSignOut>
    </View>
  );
}