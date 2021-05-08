import React,{useState} from "react";
import {Text, View, TextInput} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {isValidElement} from "../../../MyApp/Utils/helpers";
import {HeaderStyles} from "./styles/HeaderStyles";

const Header =(props)=>{
    const [showSearchBar , setShowSearchBar] = useState(false)
    const [userText , setUserText] = useState('')

    const handleTextChange=(text)=>{
         setUserText(text)
         props.callBackSearchValue(userText)
    }

    return(
        <View style={HeaderStyles.mainContainer}>
            {isValidElement(props.showBackArrow) && props.showBackArrow &&  <Icon  onPress={()=>props.navigation.goBack()} style={{paddingLeft : 10}} name="arrow-left" size={25} color="black" />}
            {!showSearchBar ? (
                <View style={HeaderStyles.secondContainer}>
                    <Text style={HeaderStyles.textStyle}>{props.pageTitle}</Text>
                    {isValidElement(props.showSearch) && props.showSearch && <Icon onPress={()=> setShowSearchBar(!showSearchBar)} name='search' size={25} />}
                </View>
            ) : (
                <View style={HeaderStyles.textInputView}>
                    <TextInput
                        autoFocus={true}
                    placeholder='Search users'
                    value={userText}
                    onChangeText={(text)=> handleTextChange(text)}
                    />
                    <Icon onPress={()=> { props.resetList() , setShowSearchBar(!showSearchBar)}} name='times' size={25} />
                </View>
            )}
        </View>
    )
}

export default Header
