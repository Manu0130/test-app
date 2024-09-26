import { StyleSheet, View, Text, TextInput, Pressable, Alert, Image } from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useEffect } from "react";
import { FontAwesome } from "@expo/vector-icons";

SplashScreen.preventAutoHideAsync();

const mainImagePath = require('./assets/images/main.png');

export default function App() {

  const [loaded, error] = useFonts(
    {
      "Montserrat-Bold": require('./assets/fonts/Montserrat-Bold.ttf'),
      "Montserrat-Light": require('./assets/fonts/Montserrat-Light.ttf'),
      "Montserrat-Regular": require('./assets/fonts/Montserrat-Regular.ttf'),
    }
  );

  useEffect( //එක පාරයි මේක call වෙන්නේ.
    () => {
      if (loaded || error) {
        SplashScreen.hideAsync();
      }
    }, [loaded, error]
  );

  if (!loaded && !error) {
    return null;
  }

  return (
    <View style={stylesheet.view1}>

      <Image source={mainImagePath} style={stylesheet.image1} />

      <Text style={stylesheet.text1}>Sign In</Text>
      <Text style={stylesheet.text2}>Hello! Welcome to Smart Trade. Please fill your details to continue. </Text>

      <Text style={stylesheet.text4}>Mobile</Text>
      <TextInput style={stylesheet.input1} inputMode={"tel"} />
      {/* tel එකෙදී phone number එකකට ගැලපෙන keyboard එකක් එන්නේ. ex: + එක තියෙනවා අවශ්‍ය නම් +94 වගේ use කරන්න. */}

      <Text style={stylesheet.text4}>Password</Text>
      <TextInput style={stylesheet.input1} secureTextEntry={true} />
      {/* password feild එකක් නිසා -> secureTextEntry true */}


      <Pressable style={stylesheet.pressable1} onPress={
        () => {
          Alert.alert("Testing", "Success");
        }
      }>
        <FontAwesome name={"user"} size={18} color={"white"}/>
        <Text style={stylesheet.text3}>Sign In</Text>
      </Pressable>

    </View>
  );
}

const stylesheet = StyleSheet.create(
  {
    view1: {
      flex: 1,
      rowGap: 10,
      paddingHorizontal: 25,
      justifyContent: "center", //main axis එක තියෙන්නෙ පහලට නිසා -> justifyContent

    },

    text1: {
      fontSize: 32,
      // fontWeight: "bold",
      color: "#023e8a",
      fontFamily: "Montserrat-Bold",
    },

    text2: {
      fontSize: 20,
      fontFamily: "Montserrat-Light",
    },

    text3: {
      fontSize: 20,
      fontFamily: "Montserrat-Bold",
      color: "white"
    },

    text4: {
      fontSize: 20,
      fontFamily: "Montserrat-Regular",
      color: "#023e8a"
    },

    input1: {
      width: "100%",
      height: 40,
      borderStyle: "solid",
      borderWidth: 2,
      borderColor: "#023e8a",
      fontSize: 18,
      paddingStart: 10, //input field එකේ text එක start වෙන gap එක
      borderRadius: 10,
      fontFamily: "Montserrat-Regular",

    },

    pressable1: {
      backgroundColor: "#023e8a",
      height: 50,
      borderRadius: 10,
      marginTop: 10,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      columnGap: 10
    },

    image1: {
      alignSelf: "center",
      marginBottom: 15
    }

  }
);