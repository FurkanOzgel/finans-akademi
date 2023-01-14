import { Text, View, FlatList, Image, StatusBar, TouchableWithoutFeedback } from "react-native";
import React from "react";
import ContentData from "./ContentData";
import styles from "./EducationPage.style";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useIsFocused } from '@react-navigation/native';

function HeaderComponent() {
    return(
        <View style={styles.topContainer}>
            <Image source={require("./../../assets/investment.png")} style={styles.topImg} />
            <Text style={styles.greeting}>
                    Tekrar{"\n"}
                    Hoşgeldiniz!
            </Text>
        </View>
        )
}

function FlatListItem(item) {
    return(
        <TouchableWithoutFeedback   
            onPress={() => console.log(item)}
            >
            <View style={styles.cardContainer}>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Ionicons name={"chevron-forward"} size={20} style= {{marginRight:20}} color={"black"}/>
            </View>
        </TouchableWithoutFeedback>
        )
}

export default function EducationPage() {

    const isFocused = useIsFocused();

    return (
        <View>
            {isFocused ? <StatusBar backgroundColor='#585BFF' barStyle='ligth-content' /> : null}
            <FlatList
                ListHeaderComponent={HeaderComponent}
                data={ContentData}
                renderItem={({item}) => FlatListItem(item)}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 10 }}
                />
        </View>
    );
  }