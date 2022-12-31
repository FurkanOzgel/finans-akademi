import React, {useState} from "react";
import { Text, View, Switch } from "react-native";
import styles from "./ActivateBand.style"; 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ActivateBand() {

    const [isEnabled, SetIsEnabled] = useState(false)
    const toggleSwitch = () => {
        SetIsEnabled(previousState => !previousState)
    };
    
    return(
        <View style={styles.container}>
            <View style={styles.card_icon}>
                <MaterialCommunityIcons name = {"watch-import-variant"} size={25} color={"black"}/>
            </View>
            <View style={styles.card_title_container}>
                <Text style={styles.card_title}>Akıllı Saat Senkronizasyonu</Text>
            </View>
                <View style={styles.switch_container}>
                <Switch
                    trackColor={{ false: "#AFAFAF", true: "#47DD7C" }}
                    thumbColor={isEnabled ? "#f1f1f1" : "#f1f1f1"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
        </View>
    );
  }