import React from 'react';
import { View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons'
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';

import { styles } from "./styles";
import { theme } from '../../global/styles/theme';

export function AppointmentDetails() {
  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto
              name="share"
              size={20}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />
    </Background>
  )
}