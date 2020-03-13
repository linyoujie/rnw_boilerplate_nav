// App.js - WEB
import React, { Component } from "react";
import {  View, StyleSheet, Text } from "react-native";
import WebRoutesGenerator from "./NativeWebRouteWrapper";
import { ModalContainer } from "react-router-modal";
import HomeScreen from "./HomeScreen";
import TopNav from "./TopNav";
import SecondScreen from "./SecondScreen";
import UserScreen from "./UserScreen";
import DasModalScreen from "./DasModalScreen";
import {Button, ProgressBar, ActivityIndicator, Image} from 'react-native-web';


const uri = 'https://www.domain.com//static/img/domaincom/logo.svg';

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
const createLogger = (...msg) => () => {
  console.log(...msg);
};

const logoUri = './my-pic.jpg';

class App extends Component {
  render() {
    return (

      <View style={styles.nav_body}>
        <TopNav />
        <View style={styles.row_body}>
          <View style={styles.side_nave}>
          <View>
          <View>
      
            <ProgressBar
              style={{ borderRadius: 10, height: 10 }}
              trackColor="#D1E3F6"
              indeterminate 
            />
            <ActivityIndicator
            animating 
            color ="red"
            size = '20px'
            
            />

              <Image
              rounded
                source={{ uri: logoUri }}
                style={{ width: 200, height: 200 }}
              />


                  
                <Text style={styles.title}>Welcome to React</Text>
              </View>
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


