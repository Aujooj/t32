import React from "react";
import { Image, Text, Pressable, View } from "react-native";
import HeaderStyles from "../styles/HeaderStyles";

const Header = ({ pageTitle }) => {
  return (
    <View>
      <Pressable
        style={HeaderStyles.expandLeftLight}
        onPress={() => console.log("goBack")}
      >
        <Image
          style={HeaderStyles.icon}
          resizeMode="cover"
          source={require("../assets/Expand_left_light.png")}
        />
      </Pressable>
      <Text style={HeaderStyles.pageTitle}>{pageTitle}</Text>
    </View>
  );
};

export default Header;
