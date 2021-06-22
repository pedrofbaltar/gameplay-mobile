import React from  "react";
import { Text, Image, View } from "react-native";
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';

import DiscordIcon from "../../assets/discord.png";
import { styles } from "./styles";

type Props = RectButtonProperties & {
  title: string;
}

export function ButtonIcon({ title, ...rest }: Props) {
  return (
    <RectButton
      style={styles.container}
      {...rest}
    >
      <View style={styles.iconWrapper}>
        <Image
          source={DiscordIcon}
          style={styles.icon}
        />
      </View>

      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
}