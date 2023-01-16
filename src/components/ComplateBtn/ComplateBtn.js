import { Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./ComplateBtn.style"
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ComplateBtn(id) {

    const [isComplate, setIsComplated] = useState()

    useEffect(() => {
        AsyncStorage.getItem("complatedList").then((res) => {
            const list = JSON.parse(res)
            if(list.includes(id.id)) {
                setIsComplated(true)
            }else{
                setIsComplated(false)
            }
        });
    }, [])

    return (
        <View style={{flexDirection:"row"}}>
            <TouchableOpacity style={{flex:4}}
                onPress={() => {
                    if(isComplate){
                        setIsComplated(false)
                        AsyncStorage.getItem("complatedList").then((res) => {
                            var oldList = JSON.parse(res)

                            oldList = oldList.filter((item) => {
                                return item != id.id
                            })
                            AsyncStorage.setItem("complatedList",JSON.stringify(oldList))
                        });
                    }else{
                        setIsComplated(true)
                        AsyncStorage.getItem("complatedList").then((res) => {
                            var oldList = JSON.parse(res)
                            if(oldList == null){
                                oldList = [] 
                            }
                            oldList.push(id.id)
                            AsyncStorage.setItem("complatedList",JSON.stringify(oldList))
                        });
                    }
                }}>
                {isComplate?
                    <View style={styles.complatedContainer}>
                        <FontAwesome name={"check"} size={30} color={"white"}/>
                    </View>:
                    <View style={styles.complateContainer}>
                        <Text style={styles.complateText}>Tamamla</Text>
                    </View>}
            </TouchableOpacity>
            <TouchableOpacity style={isComplate ? styles.complatedInfoContainer : styles.infoContainer}>
                <Feather name={"info"} size={30} color={"white"}/>
            </TouchableOpacity>
        </View>
    );
  }