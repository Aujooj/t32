import * as React from "react";
import { Text, Pressable, View, Image } from "react-native";
import SplashPageStyle from "../styles/SplashPageStyle";

const SplashPage = () => {
  return (
    <View style={SplashPageStyle.splashPage}>
      <Text style={SplashPageStyle.poweredByIpb}>Powered by IPB</Text>
      <Image
        style={[SplashPageStyle.logoIcon, SplashPageStyle.umaPosition]}
        source={require("../assets/logo.png")}
      />
      <Pressable
        style={[SplashPageStyle.jTemUmaContainer, SplashPageStyle.umaPosition]}
        onPress={() => {}}
      >
        <Text style={SplashPageStyle.text}>
          <Text style={SplashPageStyle.jTemUma}>{`Já tem uma conta? `}</Text>
          <Text style={SplashPageStyle.entrar}>Entrar</Text>
        </Text>
      </Pressable>
      <View style={SplashPageStyle.botes}>
        <Pressable style={SplashPageStyle.cliente} onPress={() => {}}>
          <View
            style={[SplashPageStyle.rectangle, SplashPageStyle.rectangleLayout]}
          />
          <Text style={[SplashPageStyle.text1, SplashPageStyle.textTypo]}>
            Cliente
          </Text>
        </Pressable>
        <Pressable style={SplashPageStyle.administrador} onPress={() => {}}>
          <View
            style={[
              SplashPageStyle.rectangle1,
              SplashPageStyle.rectangleLayout,
            ]}
          />
          <Text style={[SplashPageStyle.text2, SplashPageStyle.textTypo]}>
            Administrador
          </Text>
        </Pressable>
      </View>
      <Text
        style={[SplashPageStyle.escolhaUmaOpo, SplashPageStyle.umaPosition]}
      >
        Escolha uma opção
      </Text>
      <View
        style={[SplashPageStyle.statusBar, SplashPageStyle.barFlexBox]}
      ></View>
      <View style={[SplashPageStyle.homeBar, SplashPageStyle.barFlexBox]}>
        <View style={SplashPageStyle.rectangle2} />
      </View>
    </View>
  );
};

export default SplashPage;
