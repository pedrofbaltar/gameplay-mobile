import React from "react";
import {
  StatusBar,
  View,
  Text,
  Image,
} from "react-native";
import { ButtonIcon } from "../../components/ButtonIcon";

import Illustration from "../../assets/illustration.png";
import { styles } from "./styles";

export function SingIn() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Image
        source={Illustration}
        style={styles.illustration}
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {'\n'}
          e organize suas {'\n'}
          jogatinas
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {'\n'}
          favoritos com seus amigos
        </Text>

        <ButtonIcon
          title="Entrar com Discord"
          activeOpacity={0.7}
        />
      </View>
    </View>
  );
}