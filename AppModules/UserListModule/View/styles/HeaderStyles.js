import {StyleSheet} from "react-native";

export const HeaderStyles=  StyleSheet.create({
    mainContainer : {
        flexDirection : 'row'  , backgroundColor :'#e9e9f5' , paddingVertical :15
    },
    textStyle:{
        fontSize : 20 , left : 20
    },
    secondContainer:{
        flex : 1,
        flexDirection: 'row' ,
        justifyContent : 'space-between',
        paddingRight : 20
    },
    textInputView : {
        flex : 1 ,
        flexDirection: 'row' ,
        justifyContent : 'space-between',
        borderBottomColor : 'black' ,
        borderBottomWidth :1,
        marginHorizontal: 20
    }

})
