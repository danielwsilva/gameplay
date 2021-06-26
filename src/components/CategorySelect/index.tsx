import React from "react";
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native';

import { Category } from '../Category';
import { categories } from '../../utils/categories';

import { styles } from './styles';

type Props = {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
  hasCheckBox?: boolean;
}

export function CategorySelect({ categorySelected, setCategory, hasCheckBox = false }: Props) {
  return (
    <ScrollView 
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {
        categories.map(category => (
          <Category 
            key={category.id} 
            title={category.title} 
            icon={category.icon}
            checked={category.id === categorySelected} 
            hasCheckBox={hasCheckBox}
            onPress={() => setCategory(category.id)}
          />
        ))
      }
    </ScrollView>
  );
}