import React from "react";
import BandSwitch from "./../../components/BandSwtich"
import { View, Text, ScrollView } from "react-native";

export default function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ScrollView>
                <BandSwitch/>
            </ScrollView>
        </View>
    );
  }