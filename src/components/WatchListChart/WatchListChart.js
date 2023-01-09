import React, { useState } from "react";
import { View, Text} from "react-native";
import styles from "./WatchListChart.style";

export default function WatchListChart({data}) {

    return(
        <View style={styles.container}>        
            <View style={styles.view}>
                <Text style={[styles.name, {flex:1}]}>{data.description}</Text>
                <Text style={styles.name}>{data.price}</Text>
            </View>
            <View style={styles.view}>
                <View style={styles.bottomView}>
                    <Text style={styles.type}>{data.type.charAt(0).toUpperCase() + data.type.slice(1)} - </Text>
                    <Text style={styles.exchange}>{data.listedExchange} | </Text>
                    <Text style={styles.name}>{data.symbol}</Text>
                </View>
                <Text style={data.percentage > -1 ? {fontWeight:"bold", color:"green"}:{fontWeight:"bold",
                        color:"red"}}>{data.percentage}%</Text>
            </View>
        </View>
    )
};