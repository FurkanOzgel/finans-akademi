import React from "react";
import { View, Text, Image } from "react-native";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SplashScreen from "react-native-splash-screen";
import SettingsPage from "./pages/SettingsPage";
import CustomIcon from './components/CustomIcon'


const Tab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff'
  },
};

export default function Router() {

    React.useEffect(() => {
        SplashScreen.hide();
      }, []);
    
    return(
        <NavigationContainer 
          theme={MyTheme}
          >
            <Tab.Navigator 
                initialRouteName="Blog"
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarHideOnKeyboard:true,
                    tabBarShowLabel:false,
                    tabBarIcon: ({ focused, color, size }) => {
                      let iconName;
          
                      if (route.name === 'Demo Screen') {
                          iconName = focused ? 'invest' : 'invest-outline';
                          return <CustomIcon name={iconName} size={size} color={color}/>;
                      } else if (route.name === 'Blog') {
                        iconName = focused ? 'book' : 'book-outline';
                        return <Ionicons name={iconName} size={size} color={color} />;
                      } else if (route.name === 'Settings') {
                        iconName = focused ? 'settings' : 'settings-outline';
                        return <Ionicons name={iconName} size={size} color={color} />;
                      }
                    },
                    tabBarActiveTintColor: '#000080',
                    tabBarInactiveTintColor: 'gray',
                  })}
            >
                <Tab.Screen name="Demo Screen" component={DemoScreen}/>
                <Tab.Screen name="Blog" component={BlogScreen}/>
                <Tab.Screen name="Settings" component={SettingsPage}/>

            </Tab.Navigator>
        </NavigationContainer>
    )
}

function DemoScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Demo Yatırım</Text>
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
  



    
