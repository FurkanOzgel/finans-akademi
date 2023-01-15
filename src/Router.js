import React, { useEffect } from "react";
import { View, Text, StatusBar } from "react-native";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SplashScreen from "react-native-splash-screen";
import SettingsPage from "./pages/SettingsPage";
import CustomIcon from './components/CustomIcon';
import BandSettings from "./pages/BandSettings";
import NotificationSettings from "./pages/NotificationSettings";
import AboutPage from "./pages/AboutPage";
import Languages from "./pages/Languages";
import EducationPage from "./pages/EducationPage";
import HtmlContentPage from "./pages/HtmlContentPage";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


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
    StatusBar.setBackgroundColor("white")
    StatusBar.setBarStyle("dark-content")
    
    return(
        <NavigationContainer 
          theme={MyTheme}>
              <Tab.Navigator 
                  initialRouteName="Edu"
                  screenOptions={({ route }) => ({
                      headerShown: false,
                      tabBarShowLabel:false,
                      tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Demo Screen') {
                            iconName = focused ? 'invest' : 'invest-outline';
                            return <CustomIcon name={iconName} size={size} color={color}/>;
                        } else if (route.name === 'Edu') {
                            iconName = focused ? 'book' : 'book-outline';
                            return <Ionicons name={iconName} size={size} color={color} />;
                        } else if (route.name === 'Settings Stack') {
                            iconName = focused ? 'settings' : 'settings-outline';
                            return <Ionicons name={iconName} size={size} color={color} />;
                        }
                      },
                      tabBarActiveTintColor: '#585BFF',
                      tabBarInactiveTintColor: 'gray',
                    })}>
                <Tab.Screen name="Demo Screen" component={DemoScreen}/>
                <Tab.Screen name="Edu" component={EduStack}/>
                <Tab.Screen name="Settings Stack" component={SettingsStack}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

function SettingsStack() {

    return (
        <Stack.Navigator screenOptions={() => ({
            headerShadowVisible:false,
            animation:"slide_from_right"
            })}>
              <Stack.Screen name="Settings" component={SettingsPage} options={{"headerShown":false}}/>
              <Stack.Screen name="Akıllı Bileklik Ayarları" component={BandSettings}/>
              <Stack.Screen name="Günlük Hatırlatıcı" component={NotificationSettings}/>
              <Stack.Screen name="Dil" component={Languages}/>
              <Stack.Screen name="Hakkında" component={AboutPage}/>
        </Stack.Navigator>
    );
}


function EduStack() {

    return (
        <Stack.Navigator screenOptions={() => ({
            headerShadowVisible:false,
            animation:"slide_from_right",
            headerTitleStyle:{fontSize:17}
            })}>
              <Stack.Screen name="Education" component={EducationPage} options={{"headerShown":false}}/>
              <Stack.Screen name="HtmlPage" component={HtmlContentPage}/>
        </Stack.Navigator>
    );
}

function DemoScreen() {

    return (
        <View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text>Demo Yatırım</Text>
            </View>
        </View>
    );
  }

