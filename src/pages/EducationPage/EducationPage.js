import { Text, View, FlatList, Image, TouchableWithoutFeedback, StatusBar } from "react-native";
import React, {useEffect, useState} from "react";
import ContentData from "./ContentData";
import styles from "./EducationPage.style";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";

function HeaderComponent() {
    return(
        <View style={styles.topContainer}>
            <Image source={require("./../../assets/investment.png")} style={styles.topImg} />
            <Text style={styles.greeting}>
                    Tekrar{"\n"}
                    Hoş Geldiniz!
            </Text>
        </View>
        )
}

function FlatListItem(item, navigation, complatedList) {

    return(
            <TouchableWithoutFeedback   
                onPress={() => navigation.navigate("HtmlPage",params={item})}
                >
                <View style={{ overflow: 'hidden', paddingBottom: 5 }}>
                    <View style={complatedList.includes(item.id) ? styles.complatedCard : styles.cardContainer}>
                        <Text style={complatedList.includes(item.id) ? styles.complatedCardTitle : styles.cardTitle}>{item.id}. {item.name}</Text>
                        {complatedList.includes(item.id) ? 
                            <Ionicons name={"checkmark-sharp"} size={25} style= {{marginRight:20}} color={"white"}/>:
                            <Ionicons name={"chevron-forward"} size={20} style= {{marginRight:20}} color={"black"}/>
                            }
                        </View>
                </View>
            </TouchableWithoutFeedback>
        )
}

export default function EducationPage({navigation}) {

    const isFocused = useIsFocused();

    const [complatedList, setComplatedList] = useState([])

    useEffect(() => {
        AsyncStorage.getItem("complatedList").then((res) => {
            if(JSON.parse(res) == null){
                null
            }else{
                setComplatedList(JSON.parse(res))
            }
            });
        }, [isFocused])

    return (
        <View>
            {isFocused ? <StatusBar backgroundColor={"#585BFF"} barStyle={"light-content"}/>: null}
            <FlatList
                ListHeaderComponent={HeaderComponent}
                data={ContentData}
                renderItem={({item}) => FlatListItem(item, navigation, complatedList)}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 10 }}
                />
        </View>
    );
  }