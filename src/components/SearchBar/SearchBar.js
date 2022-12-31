import React, { useState, useRef } from 'react';
import { TextInput, View, TouchableOpacity, FlatList } from 'react-native';
import styles from './SearchBar.style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useSearch from "./../../api/tradingview/useSearch";
import SearchChart from '../SearchChart';
import LottieView from 'lottie-react-native';

export default function SearchBar({onPress}) {
    
    const [onFocus, setOnFocus] = useState(false)
    const [text, setText] = useState("")
    const textInput = useRef() 
    var {data: searchList, loading: loading} = useSearch(text,text)
    const handleClose = () => {
        searchList = []
        setText("")
        textInput.current.clear()
    }

    return(
        <View>
            <View style={styles.container}>
                <Ionicons style={styles.searchIcon} name={"search"} size={18} />
                <TextInput
                    style={styles.searchBar}
                    placeholder="Ekle..." 
                    onFocus = {() => setOnFocus(true)}
                    onBlur = {() => setOnFocus(false)}
                    onChangeText= {(input) => setText(input)}
                    ref={textInput}
                    />
                {loading == true?
                        <LottieView
                        source={require('./../../assets/loading.json')}
                        style= {styles.loading}
                        loop= {true}
                        autoPlay={true}
                        />:null}
                {!text=="" && onFocus == true && loading == false?
                        <TouchableOpacity onPress={handleClose}>
                            <Ionicons style={styles.cancelIcon} name={"close"} size={20} />
                        </TouchableOpacity>
                        :null
                }
                </View>
                <FlatList 
                    data={searchList.filter(item => item.type != "futures")} 
                    renderItem={({item}) =>{ return <SearchChart item = {item} pressFunc = {onPress}/> }}
                    />
        </View>
    )
}