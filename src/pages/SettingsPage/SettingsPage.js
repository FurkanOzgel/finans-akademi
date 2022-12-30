import React from "react";
import SettingsCard from "../../components/SettingsCard";
import { View, Text, ScrollView } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from "./SettingsPage.style";

export default function SettingsScreen() {
    return (
        <View>
            <View style={styles.title_container}>
                <Text style={styles.title}>Ayarlar</Text>
            </View>
            <ScrollView>
                <SettingsCard 
                    type={"switch"}
                    title={"Koyu Tema"}
                    Icon={() =>{ return(<Ionicons name = {"color-palette-outline"} size={25} color={"black"}/> )}}
                    onPress = {() => null}
                />
                <SettingsCard 
                    type={"button"}
                    title={"Akıllı Bileklik İle Fiyat Verisi Al"}
                    Icon={() =>{ return(<Ionicons name = {"watch-outline"} size={25} color={"black"}/> )}}
                    onPress = {() => null}
                />
                <SettingsCard 
                    type={"button"}
                    title={"Günlük Hatırlatıcı"}
                    Icon={() =>{ return(<Ionicons name = {"notifications-outline"} size={25} color={"black"}/> )}}
                    onPress = {() => null}
                />
                <SettingsCard 
                    type={"button"}
                    title={"Hakkında"}
                    Icon={() =>{ return(<Ionicons name = {"md-information-circle-outline"} size={25} color={"black"}/> )}}
                    onPress = {() => null}
                />
            </ScrollView>
        </View>
    );
  }