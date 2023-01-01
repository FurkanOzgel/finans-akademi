import { Dimensions, View, Text, TouchableHighlight, TouchableOpacity, FlatList, Animated } from 'react-native';
import React,{useState, useEffect} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import WatchListChart from "../WatchListChart/WatchListChart";
import { GestureHandlerRootView, Swipeable } from "react-native-gesture-handler";
import styles from "./WatchList.style";
import Ionicons from 'react-native-vector-icons/Ionicons';

export function ItemBox({item, setList}) {

    const rightSwipe = (progess, dragX) => {

        const scale = dragX.interpolate({
            inputRange: [1, 200],
            outputRange: [1, 0],
            extrapolateRight: "clamp",
        })

        const handleDelete = async (deleted) => {
            var data = JSON.parse(await AsyncStorage.getItem("list_array"))
            data = data.filter(function(item) {
                return item !== deleted
            })
            AsyncStorage.setItem("list_array",JSON.stringify(data))
            setList(data)
            }

        return(
            <View style={styles.rightSwipe}>
                <TouchableOpacity onPress={() => handleDelete(item)}  style={{top:0,botom:0, right:0, left:0}} activeOpacity={0.6}>
                    <Animated.Text style={{transform:[{scale:scale}]}}>
                        <Ionicons name={"trash-outline"} size={30} color={"white"}/>
                    </Animated.Text>
                </TouchableOpacity>
            </View>
        )
    }

    return(
        <Swipeable renderRightActions={rightSwipe} >
            <WatchListChart item={item}/>
        </Swipeable>
    )
} 

export default function WatchList() {

    const [list, setList] = useState([])

    

    useEffect(() => {
        AsyncStorage.getItem("list_array").then((item) => setList(JSON.parse(item)));
    },[])
    
    return (
        <FlatList
            data={list}
            renderItem={({item}) => (
                <GestureHandlerRootView>
                    <ItemBox item={item} setList = {setList}/>
                </GestureHandlerRootView>
                )}/>
    );
  }