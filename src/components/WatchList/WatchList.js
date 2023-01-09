import { View, TouchableOpacity, FlatList, Animated } from 'react-native';
import React,{useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import WatchListChart from "../WatchListChart/WatchListChart";
import { GestureHandlerRootView, Swipeable } from "react-native-gesture-handler";
import styles from "./WatchList.style";
import Ionicons from 'react-native-vector-icons/Ionicons';

export function ItemBox({setList, id, together, list, symbol, description,  price, percentage, listedExchange, type, loading}) {

    const scale = dragX.interpolate({
        inputRange: [1, 200],
        outputRange: [1, 0],
        extrapolateRight: "clamp",
    })
    const handleDelete = async (deleted) => {
        var data = list
        data = data.filter(function(item) {
            return item !== deleted
        })
        AsyncStorage.setItem("list_array",JSON.stringify(data))
        setList(data)
        }
    return(
        <View style={styles.rightSwipe}>
            <TouchableOpacity onPress={() => handleDelete(together)}  style={{top:0,botom:0, right:0, left:0}} activeOpacity={0.6}>
                <Animated.Text style={{transform:[{scale:scale}]}}>
                    <Ionicons name={"trash-outline"} size={30} color={"white"}/>
                </Animated.Text>
            </TouchableOpacity>
        </View>
    )
    
    return(
        <Swipeable renderRightActions={rightSwipe} key={id}>
            <WatchListChart data={{symbol:symbol ,description:description ,price: price , percentage: percentage , listedExchange: listedExchange, type: type, loading: loading}} />
        </Swipeable>
    )
}

export default function WatchList() {

    const [list, setList] = useState([])

    const [loading, setLoading] = useState(true)
    const [symbol, setSymbol] = useState("btc") 
    const [description, setDescription] = useState("bitcoin") 
    const [price, setPrice] = useState(45) 
    const [percentage, setPercentage] = useState(13)
    const [listedExchange, setLlistedExchange] = useState("bist")
    const [type, settype] = useState("stock") 
    
    // const client = new Client();
    // const chart = new client.Session.Chart();

    
    // chart.setMarket(item.split(":")[1]);
    // chart.setSeries("1D")
    
    // chart.onUpdate( () => {
    //     if (!chart.periods[0]) return;
    //     var price = chart.periods[0].close*100;
    //     price = parseInt(price)/100
    //     const responseData = {
    //         symbol: item.split(":")[1],
    //         description: chart.infos.description,
    //         local_description: chart.infos.local_description,
    //         price: `${price} ${chart.infos.currency_id}`,
    //         percentage: Math.round(((chart.periods[0].close - chart.periods[1].close)*100/
    //             chart.periods[1].close)*100)/100,
    //         type: chart.infos.type,
    //         listed_exchange: chart.infos.listed_exchange,
    //         country : chart.infos.country
    //     }

    //     setSymbol(responseData.symbol)
    //     setDescription(responseData.description)
    //     setPrice(responseData.price)
    //     settype(responseData.type)
    //     setPercentage(responseData.percentage)
    //     setLlistedExchange(responseData.listed_exchange)
    //     setLoading(false)

    //     client.end()
    //     chart.delete();
    //     });

    
    useEffect(() => {
        list.forEach((_, i) => {
            rowAnimatedValues[`${i}`] = new Animated.Value(1);
          });
    },[list])


    return (
        <FlatList
            data={list}
            renderItem={({item}) => (
                <GestureHandlerRootView>
                    <ItemBox item={item[1]} setList = {setList} list={list} id={item[0]} together={item} symbol={symbol} description={description}  price = {price} percentage={percentage} listedExchange= {listedExchange} type= {type} loading={loading}/>
                </GestureHandlerRootView>
                )}/>
    );
  }