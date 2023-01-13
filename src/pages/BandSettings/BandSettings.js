import { Text, TouchableOpacity, View, } from "react-native";
import React, {useState, useEffect} from "react";
import ActivateBand from "./../../components/ActivateBand";
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from "./BandSettings.style";
import SearchBar from "../../components/SearchBar/SearchBar";
import AsyncStorage from '@react-native-async-storage/async-storage';
import WatchList from "../../components/WatchList/WatchList";



export default function BandSettings() {
    const [addMode, SetAddMode] = useState(false)

    


    async function addItemWatchList(name) {

        

        try{
            
            if (await AsyncStorage.getItem("list_array") == null){
                var oldList = [];
            }else{
                var oldList = JSON.parse(await AsyncStorage.getItem("list_array"))
            }

            var sameValue = false
            oldList.filter( item => {
                if(item[1] == name){
                    sameValue = true
                }
            console.log(sameValue)
            })
            
            if(!sameValue) {
                oldList.push([Math.floor((Math.random() * 9999)), name])
                AsyncStorage.setItem("list_array",JSON.stringify(oldList))
            }
            SetAddMode(false)
        }catch{
            null
        }
    };

    return (
        <View>
            <ActivateBand/>
            <View style={styles.watch_list_container}>
                <View style={styles.card_icon}>
                    <Ionicons name={"md-list-outline"} size={25} color={"black"}/>
                </View>
                <View style={styles.card_title_container}>
                    <Text style={styles.card_title}>İzleme Listesi</Text>
                </View>
                <TouchableOpacity style={styles.add_icon} onPress={() => {
                    SetAddMode(!addMode);
                    }}>
                    <Ionicons name={addMode ? "remove" : "add"} size={25} color={"black"}/>
                </TouchableOpacity>
            </View>
            <View>
                { addMode ? <SearchBar onPress={addItemWatchList}/>: <WatchList />}
            </View>
        </View>        
);
}