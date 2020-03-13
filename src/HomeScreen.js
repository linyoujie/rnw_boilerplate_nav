import React from "react";
import { View, Text, Platform, StyleSheet, Button } from "react-native";
import {Picker, Image} from 'react-native-web';

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu",
  web: "Your browser will automatically refresh as soon as you save the file."
});

const HomeScreen = ({ navigation }) => {
  return (

  

    <View style={styles.container}>
              <Image
              rounded
                source={{ uri: 'https://i.giphy.com/media/7OVCDfi4EJdlbpVjNq/giphy.gif' }}
                style={{ width: 200, height: 100 }}
              />


      <Picker>
        <Picker.Item label="Goblet of Fire" />
        <Picker.Item label="Black Mode" />
      </Picker>
      <Text style={styles.welcome}>
        Welcome to React Native Web universal app!
      </Text>
      <Text style={styles.instructions}>
        This component is shared between web and react environment. To see how
        it works, just edit the HomeScreen.js
      </Text>
      <Text style={styles.instructions}>{instructions}</Text>
      <Button
        title="Go to Second!"
        onPress={() => navigation.navigate("Second")}
      />
      <Button
        title="Das Modal"
        onPress={() => navigation.navigate("DasModal")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

export default HomeScreen;
