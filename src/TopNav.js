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
      <View>
        <H4>Example:</H4>

        <Gravatar
          md5='313cbdb52db5b6bb6b3f14bc4ddae461'
          size={100}
          circle
          style={gravatarStyle}
        />
          <View style={{ marginTop: -55, flexDirection: 'row' }}>
     
          <Badge value={4} color='red' />
          </View>
      </View>
      <Button title="Home" onPress={() => history.push("/")} />
      <Button title="Second" onPress={() => history.push("/second")} />
    </View>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: "column",
    //justifyContent: "space-evenly",
    justifyContent: "center",
    backgroundColor: "#cccccc"
  }
});

export default withRouter(TopNav);
