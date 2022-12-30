import React, {useState} from "react";
import { TouchableOpacity, Text, View, Switch } from "react-native";
import styles from "./SettingsCard.style"; 
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SettingsCard({type, title, Icon, onPress}) {
    
    const [isEnabled, SetIsEnabled] = useState(false)
    
    const toggleSwitch = () => {
        SetIsEnabled(previousState => !previousState)
    };
    
    return(
        <TouchableOpacity onPress={onPress} disabled={ (type == "button") ? false : true}>
            <View style={styles.container}>
                <View style={styles.card_icon}>
                    <Icon />
                </View>

                <View style={styles.card_title_container}>
                    <Text style={styles.card_title}>{title}</Text>
                </View>
                
                {type == "switch"?
                    <View style={styles.switch_container}>
                        <Switch
                            trackColor={{ false: "#bbd9e2", true: "#222da5" }}
                            thumbColor={isEnabled ? "#ffffff" : "#f5dd4b"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>:
                    <View style={styles.forward_icon}>
                        <Ionicons name={"chevron-forward"} size={18} color={"black"}/>
                    </View>
                    }  
            </View>
        </TouchableOpacity>
    );
}