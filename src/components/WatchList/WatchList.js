import { Dimensions, View, Text, TouchableHighlight, TouchableOpacity, FlatList, Animated } from 'react-native';
import React,{useState, useEffect, useRef} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import WatchListChart from "../WatchListChart/WatchListChart";
import { GestureHandlerRootView, Swipeable } from "react-native-gesture-handler";
import styles from "./WatchList.style";
import Ionicons from 'react-native-vector-icons/Ionicons';

export function ItemBox({item, setList, list, rowAnimatedValues}) {

    const swipeableRef = useRef(null)

    const rightSwipe = () => {
        return(
            <Animated.View
            style={[
                {
                  height: rowAnimatedValues[list.indexOf(item)].interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 50],
                  }),
                },
              ]}
              >
                <View style={styles.rightSwipe}>
                    <Ionicons name={"trash-outline"} size={30} color={"white"} style={{marginRight:10}}/>
                </View>
            </Animated.View>
        )
    }

    const closeInstantlyRight = () => {
        const { rowWidth } = this.state;
        this.setState({ rowState: Math.sign(rowWidth) });
        this.closeInstantlyLeft()
      };

    const Delete = () => {
        Animated.timing(rowAnimatedValues[list.indexOf(item)], {
            toValue: 0,
            duration: 200,
            useNativeDriver: false
        }).start(() => {
            const newData = [...list];
            const prevIndex = list.findIndex((i) => i === item);
            newData.splice(prevIndex, 1);
            setList(newData);
            swipeableRef.current.close()
        })
    }



    return(
        <Swipeable renderRightActions={rightSwipe} onSwipeableWillOpen={Delete} ref={swipeableRef} rightThreshold={false}>
            <WatchListChart item={item}/>
        </Swipeable>
    )
}

export default function WatchList() {

    

    const [list, setList] = useState([AsyncStorage.getItem("list_array").then((item) => {return JSON.parse(item)})])
    const rowAnimatedValues = {};
    const swipeableRef = useRef(null);

    list.forEach((_, i) => {
        rowAnimatedValues[`${i}`] = new Animated.Value(1);
      });

    useEffect(() => {
        list.forEach((_, i) => {
            rowAnimatedValues[`${i}`] = new Animated.Value(1);
          });
        console.log(list)
    },[list])


    return (
        <GestureHandlerRootView>
            <FlatList
                data={list}
                renderItem={({item}) => (
                        <ItemBox item={item} setList = {setList} list={list} rowAnimatedValues={rowAnimatedValues} swipeableRef={swipeableRef}/>
                    )}/>
        </GestureHandlerRootView>
    );
  }