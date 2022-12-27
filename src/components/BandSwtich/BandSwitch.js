import React, { useState, useEffect, useRef } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import setupPlayer from "./setupPlayer"
import TrackPlayer from "react-native-track-player";


export default function BandSwitch() {

    const [isEnabled, setIsEnabled] = useState(false);
    const isFirstRun = useRef(true);

    const toggleSwitch = () => {
        if(!isEnabled==true){
            setupPlayer()
        }else{
            TrackPlayer.reset()
        }
        setIsEnabled(previousState => !previousState)
    };

    useEffect(() => {
        if (isFirstRun.current) {
            try{
                TrackPlayer.getState().then((playerState) => {
                    console.log(playerState)
                    setIsEnabled(playerState == "playing" ? true: false)
                })
            }catch{
                setIsEnabled(false)
                }
            isFirstRun.current = false
            }
    })

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Switch</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        justifyContent:"space-between",
        padding: 10,
        borderTopWidth:1,
        borderBottomWidth:1

    },
    text:{
        fontSize:20,
        fontWeight:"bold"

    }
  });