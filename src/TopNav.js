import React from "react";
import { Button, StyleSheet } from "react-native";
import { withRouter } from "react-router-dom";
//import { Button } from './UI/src/components/Button.js'
//import {Constants, Colors, View, Card, Button, Text, Image} from 'react-native-ui-lib'; // eslint-disable-line
import { ThemeProvider,Gravatar,H4,gravatarStyle ,Badge} from "nachos-ui";
import { View } from 'react-native'
//import { Button } from 'nachos-ui'


const TopNav = ({ history }) => {
  return (
    <ThemeProvider>
    <View style={styles.main}>

      <Button title="Home" onPress={() => history.push("/")} />
      <Button title="Second" onPress={() => history.push("/second")} />
    </View>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    justifyContent: "center",
    backgroundColor: "#cccccc"
  }
});

export default withRouter(TopNav);
