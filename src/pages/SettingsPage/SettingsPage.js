import React from "react";
import BandSwitch from "./../../components/BandSwtich"
import { View, Text, ScrollView } from "react-native";

export default function SettingsScreen() {
    return (
        <View>
            <ScrollView>
                <Text style={{marginBottom:30, textAlign:"center"}}>Settings</Text>
                <BandSwitch/>
            </ScrollView>
        </View>
    );
  }