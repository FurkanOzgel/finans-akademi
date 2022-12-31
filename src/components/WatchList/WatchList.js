import { Dimensions, View, Text, TouchableHighlight, TouchableOpacity,Alert } from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import React,{useState, useEffect} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import WatchListChart from "../WatchListChart/WatchListChart";
import styles from "./WatchList.style";

export default function WatchList() {

    const [list, setList] = useState([])

    const handleDelete = async (deleted) => {
        var data = JSON.parse(await AsyncStorage.getItem("list_array"))
        data = data.filter(function(item) {
            return item !== deleted
        })
        AsyncStorage.setItem("list_array",JSON.stringify(data))
        setList(data)
        }

    useEffect(() => {
        AsyncStorage.getItem("list_array").then((item) => setList(JSON.parse(item)));
    },[])
    
    return (
        <View>
            <SwipeListView
                data={list}
                renderItem={({item}) => (
                <TouchableHighlight
                    style={styles.rowFront}
                    underlayColor={"#e5e5e5"}
                    onPress={() => console.log(item)}>
                    <WatchListChart item={item}/>
                </TouchableHighlight>
                )}
                keyExtractor={(item) => item}
                renderHiddenItem={({item}) => (
                <View style={styles.rowBack}>
                    <TouchableOpacity
                    style={[styles.backRightBtn, styles.dangerBtn]}
                    onPress={() => handleDelete(item)}>
                    <Text style={styles.backTextDanger}>Danger</Text>
                    </TouchableOpacity>
                </View>
                )}
                rightOpenValue={-Dimensions.get("window").width/5}
                stopLeftSwipe={15}
                stopRightSwipe={-Dimensions.get("window").width/5}
            />
    </View>
    );
  }