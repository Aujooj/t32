import React from "react";
import { Image, Text, Pressable, View, TextInput } from "react-native";
import ForgotPasswordStyles from "../styles/ForgotPasswordStyles";
import Header from "./Header";

const ForgotPassword = (props) => {
  return (
    <View>
      <Header pageTitle={"Esqueceu"}></Header>
      <View style={ForgotPasswordStyles.fpimage}>
        <Image
          style={[
            ForgotPasswordStyles.fpimageChild,
            ForgotPasswordStyles.image1IconPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/blueEllipse.png")}
        />
        <Image
          style={[
            ForgotPasswordStyles.image1Icon,
            ForgotPasswordStyles.image1IconPosition,
          ]}
          resizeMode="cover"
          source={require("../assets/dogConfused.png")}
        />
        <Text
          style={[ForgotPasswordStyles.text, ForgotPasswordStyles.textTypo]}
        >
          ?
        </Text>
        <Text
          style={[ForgotPasswordStyles.text1, ForgotPasswordStyles.textTypo]}
        >
          ?
        </Text>
        <Text style={ForgotPasswordStyles.esqueceuSuaSenha}>
          Esqueceu sua senha?
        </Text>
        <Text style={ForgotPasswordStyles.noSePreocupe}>
          Não se preocupe! Isso acontece. Por favor, insira o email associado à
          sua conta.
        </Text>
      </View>
      <TextInput
        style={ForgotPasswordStyles.input}
        placeholder={"Email"}
        keyboardType="email"
      />
      <Pressable
        style={ForgotPasswordStyles.comear}
        onPress={() => {
          console.log("Receber código");
        }}
      >
        <View style={ForgotPasswordStyles.rectangle} />
        <Text style={ForgotPasswordStyles.button}>Receber código</Text>
      </Pressable>
    </View>
  );
};

export default ForgotPassword;
