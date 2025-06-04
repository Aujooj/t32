import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import GetStarterStyles from "../styles/GetStartedStyles"; // Corrigi o typo em "sytles"

const GetStarted = ({ navigation, route }) => {
  const handlePress = () => {
    console.log("Botão pressionado!"); // Mensagem que será escrita no console
    route.params.handleGetStarted();
  };

  return (
    <View style={GetStarterStyles.getStarted}>
      <Image
        style={GetStarterStyles.dogAndHumanImg}
        source={require("../assets/dog-and-human-img.png")}
      />
      <Text style={GetStarterStyles.rectangle} />{" "}
      {/* Substituído View por Text */}
      <Pressable style={GetStarterStyles.comear} onPress={handlePress}>
        <View style={GetStarterStyles.rectangle1} />
        <Text
          style={[GetStarterStyles.comear1, GetStarterStyles.comear1FlexBox]}
        >
          Começar
        </Text>
      </Pressable>
      <Text
        style={[
          GetStarterStyles.bemEstarAnimalNaContainer,
          GetStarterStyles.comear1FlexBox,
        ]}
      >
        <Text style={GetStarterStyles.bemEstarAnimal}>Bem-estar animal</Text>
        <Text style={GetStarterStyles.naPalmaDa}> na palma da sua mão.</Text>
      </Text>
      <Text style={[GetStarterStyles.amorECuidado, GetStarterStyles.naPalmaDa]}>
        Amor e cuidado, em um toque.
      </Text>
      <Image
        style={GetStarterStyles.emojiPatasIcon}
        source={require("../assets/emoji-patas.svg")}
      />
      <Text
        style={[GetStarterStyles.pawsitiveCare, GetStarterStyles.naPalmaDa]}
      >
        Pawsitive Care
      </Text>
      <Text style={GetStarterStyles.statusBar}></Text>{" "}
      {/* Substituído View por Text */}
      <View style={GetStarterStyles.homeBar}>
        <View style={GetStarterStyles.rectangle2} />
      </View>
    </View>
  );
};

export default GetStarted;
