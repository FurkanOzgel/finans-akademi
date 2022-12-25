import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SplashScreen from "react-native-splash-screen";
import SettingsPage from "./pages/SettingsPage";


const Tab = createBottomTabNavigator();

export default function Router() {

    React.useEffect(() => {
        SplashScreen.hide();
      }, []);
    
    return(
        <NavigationContainer >
            <Tab.Navigator 
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                      let iconName;
          
                      if (route.name === 'Band Screen') {
                        iconName = focused ? 'watch' : 'watch-outline';
                      } else if (route.name === 'Blog') {
                        iconName = focused ? 'book' : 'book-outline';
                      } else if (route.name === 'Settings') {
                        iconName = focused ? 'settings' : 'settings-outline';
                      }
                      return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#000080',
                    tabBarInactiveTintColor: 'gray',
                  })}
            >
                <Tab.Screen name="Band Screen" component={BandScreen}/>
                <Tab.Screen name="Blog" component={BlogScreen}/>
                <Tab.Screen name="Settings" component={SettingsPage}/>

            </Tab.Navigator>
        </NavigationContainer>
    )
}

function BandScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Band Screen</Text>
      </View>
    );
  }

function BlogScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> Blog Screen</Text>
      </View>
    );
  }
  



    
