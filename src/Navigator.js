import React from 'react';
import {View,Text } from 'react-native';
import {createAppContainer } from 'react-navigation';
import ListWithMap from './Screens/ListWithMap';
import PlaceContent from './Screens/PlaceContent';

// you can also import from @react-navigation/native
import {createStackNavigator} from 'react-navigation-stack';





const AppNavigator = createStackNavigator(
  {
ListWithMap: {screen: ListWithMap ,  navigationOptions: () => ({
  title: `Choose Your Coffe Shop `,

}),},
    PlaceContent: {screen: PlaceContent,
      navigationOptions: () => ({
        title: `Coffee Shop Detailes `,
        
      })
    },
  },
  {
    initialRouteName: 'ListWithMap',
    
   
  },
);


 const AppContainer = createAppContainer(AppNavigator);

 export default AppContainer;
//  export default () => (
//     <View style={{ flex: 1 }}>
//       <AppContainer />
//     </View>
//   );
 
