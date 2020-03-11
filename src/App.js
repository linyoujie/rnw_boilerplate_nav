// App.js - WEB
import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import WebRoutesGenerator from "./NativeWebRouteWrapper";
import { ModalContainer } from "react-router-modal";
import HomeScreen from "./HomeScreen";
import TopNav from "./TopNav";
import SecondScreen from "./SecondScreen";
import UserScreen from "./UserScreen";
import DasModalScreen from "./DasModalScreen";

const routeMap = {
  Home: {
    component: HomeScreen,
    path: "/",
    exact: true
  },
  Second: {
    component: SecondScreen,
    path: "/second"
  },
  User: {
    component: UserScreen,
    path: "/user/:name?",
    exact: true
  },
  DasModal: {
    component: DasModalScreen,
    path: "*/dasmodal",
    modal: true
  }
};

class App extends Component {
  render() {
    return (
      <View style={styles.nav_body}>
        <TopNav />
        {WebRoutesGenerator({ routeMap })}
        <ModalContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nav_body: { 
    height: "100vh", 
    width: "100vw" , 
    justifyContent: 'center', 
    alignContent: 'space-around',  
    flexDirection: "row"}
});

export default App;


