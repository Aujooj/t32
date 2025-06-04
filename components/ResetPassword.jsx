import React from "react";
import { View, TextInput, Pressable, Text } from "react-native";
import ResetPasswordStyles from "../styles/ResetPasswordStyles";

const ResetPassword = (props) => {
  return (
    <View>
      <Text style={ResetPasswordStyles.pageTitle}>Trocar senha</Text>
      <TextInput
        style={ResetPasswordStyles.input1}
        placeholder={"Senha"}
        keyboardType="text"
        secureTextEntry={true}
      />
      <TextInput
        style={ResetPasswordStyles.input2}
        placeholder={"Confirmar senha"}
        keyboardType="text"
        secureTextEntry={true}
      />
      <Pressable
        style={ResetPasswordStyles.comear}
        onPress={() => {
          console.log("Salvar");
        }}
      >
        <View style={ResetPasswordStyles.rectangle} />
        <Text style={ResetPasswordStyles.button}>Salvar</Text>
      </Pressable>
    </View>
  );
};

export default ResetPassword;
