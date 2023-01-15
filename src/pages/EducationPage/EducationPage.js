import { Text, View, FlatList, Image, TouchableWithoutFeedback, StatusBar } from "react-native";
import React, {useEffect} from "react";
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
                    Hoş Geldiniz!
            </Text>
        </View>
        )
}

function FlatListItem(item, navigation) {

    return(
            <TouchableWithoutFeedback   
                onPress={() => navigation.navigate("HtmlPage",params={item})}
                >
                <View style={{ overflow: 'hidden', paddingBottom: 5 }}>
                    <View style={styles.cardContainer}>
                        <Text style={styles.cardTitle}>{item.id}. {item.name}</Text>
                        <Ionicons name={"chevron-forward"} size={20} style= {{marginRight:20}} color={"black"}/>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
}

export default function EducationPage({navigation}) {

    const isFocused = useIsFocused();

    return (
        <View>
            {isFocused ? <StatusBar backgroundColor={"#585BFF"} barStyle={"light-content"}/>: null}
            <FlatList
                ListHeaderComponent={HeaderComponent}
                data={ContentData}
                renderItem={({item}) => FlatListItem(item, navigation)}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 10 }}
                />
        </View>
    
    );
  }