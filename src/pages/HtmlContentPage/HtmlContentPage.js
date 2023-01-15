import { Dimensions, ScrollView, View, StatusBar } from "react-native";
import React from "react";
import RenderHTML from "react-native-render-html";
import Html from "./contentFiles";
import { useIsFocused } from '@react-navigation/native';

export default function HtmlContentPage({navigation, route}) {

    const data = route.params.item
    const isFocused = useIsFocused();
    navigation.setOptions({"headerTitle": data.name})

    return(
        <View>
            {isFocused ? <StatusBar backgroundColor={"#585BFF"} barStyle={"light-content"}/>: null}
            <ScrollView style={{padding:10}}>
                <RenderHTML contentWidth={Dimensions.get("window").width} 
                    source={{html:Html[data.path].default}}
                    />
            </ScrollView>
        </View>
        )
        
}