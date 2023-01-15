import React from "react";
import SettingsCard from "../../components/SettingsCard";
import { View, Text, ScrollView, StatusBar } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from "./SettingsPage.style";

export default function SettingsScreen({navigation}) {
    
    return (
        <View>
            <View>
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
                    onPress = {() => navigation.navigate("Akıllı Bileklik Ayarları")}
                />
                <SettingsCard 
                    type={"button"}
                    title={"Günlük Hatırlatıcı"}
                    Icon={() =>{ return(<Ionicons name = {"notifications-outline"} size={25} color={"black"}/> )}}
                    onPress = {() => navigation.navigate("Günlük Hatırlatıcı")}
                />
                <SettingsCard 
                    type={"button"}
                    title={"Dil"}
                    Icon={() =>{ return(<Ionicons name = {"language-outline"} size={25} color={"black"}/> )}}
                    onPress = {() => navigation.navigate("Dil")}
                />
                <SettingsCard 
                    type={"button"}
                    title={"Hakkında"}
                    Icon={() =>{ return(<Ionicons name = {"md-information-circle-outline"} size={25} color={"black"}/> )}}
                    onPress = {() => navigation.navigate("Hakkında")}
                />
            </ScrollView>
        </View>
    );
  }