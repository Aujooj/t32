import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import SplashPage from "./components/SplashPage";
import GetStarted from "./components/GetStarted";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(false);
    }, 3000); // Tempo de exibição do splash screen (em milissegundos)
  }, []);

  const [fontsLoaded, error] = useFonts({
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  const handleGetStarted = () => {
    setHideSplashScreen(true);
    setTimeout(() => {
      setHideSplashScreen(false);
    }, 3000); // Tempo de exibição do splash screen (em milissegundos)
  };

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="SplashPage"
              component={SplashPage}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="GetStarted"
              component={GetStarted}
              options={{ headerShown: false }}
              initialParams={{ handleGetStarted: handleGetStarted }}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </>
  );
};

export default App;
