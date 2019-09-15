import React from 'react';
import {View } from 'react-native';
import {createAppContainer } from 'react-navigation';
import ListWithMap from './Screens/ListWithMap';
import PlaceContent from './Screens/PlaceContent';

// you can also import from @react-navigation/native
import {createStackNavigator} from 'react-navigation-stack';






const AppNavigator = createStackNavigator(
  {
ListWithMap: {screen: ListWithMap},
    PlaceContent: {screen: PlaceContent},
  },
  {
    initialRouteName: 'ListWithMap',
    defaultNavigationOptions: {
        header: null,
        headerStyle: {
          backgroundColor: "#f4511e"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold"
        }
    }
  },
);


 const AppContainer = createAppContainer(AppNavigator);
 export default () => (
    <View style={{ flex: 1 }}>
      <AppContainer />
    </View>
  );
 
