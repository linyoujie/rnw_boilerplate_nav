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
import { ThemeProvider, Gravatar, H4, gravatarStyle, Badge, Card } from "nachos-ui";
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
     


        <View style={styles.row_body}>

          <View style={styles.side_nave}>
          <View>
            <H4>Example:</H4>
            <Card
              footerContent='The avocado is a tree that is native to Mexico'
              image={{uri:'my-pic.jpg'}}
              style={styles.cardStyle}
            />
            <Badge value={4} color='red' />
            </View >
          </View>
          <View style={styles.side_body}>

      
          {WebRoutesGenerator({ routeMap })}
          <ModalContainer />
          </View>
         
        </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  nav_body: {
    height: "100vh",
    width: "100vw",
    justifyContent: 'center',
    alignContent: 'space-between',
    flexDirection: "column"
  },
  row_body: {
    height: "100vh",
    width: "100vw",
    
    flex: 1,
    flexDirection: "row"
  },
    side_nave: {
    height: "100vh",
    width: "100vw",
    alignContent:"center",
    justifyContent:"center",
    width:200,
    flexDirection: "column"
  },
  side_body: {
    height: "100vh",
    width: "100vw",
    alignContent:"center",

    flex: 5,
    flexDirection: "column"
  },
  cardStyle :
  { margin: 15, width: 280 }

});

export default App;


