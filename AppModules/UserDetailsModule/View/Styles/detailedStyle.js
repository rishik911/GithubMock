import {StyleSheet} from "react-native";

export const DetailedStyle = StyleSheet.create({
        mainContainer : {
            marginHorizontal : 10,
            backgroundColor : '#ccd4de',
            marginVertical :5,
            borderRadius : 8,
            alignItems :'center',
            borderColor: '#eeeeee' ,
            borderWidth : 4
        },
    repoName : {
            fontSize : 22 ,
        fontWeight : 'bold'
    },
    subContainer :{
            flex :1 ,
            flexDirection :'row',
        justifyContent :'space-between'
    },
    textStyle : {
            fontSize : 12,
        marginVertical: 2,
        marginHorizontal:  10,
        textAlign :'center'
    },
    imageStyle:{
        width : 100 , height : 100 , borderRadius : 50 ,
        marginVertical : 10,
    },
    container : {
            marginHorizontal : 10,
            backgroundColor : '#87878e',
            marginVertical :5,
            borderRadius : 8,
            alignItems :'center',
            borderColor: '#eeeeee' ,
            borderWidth : 4,
        height: 50,
    },
    stylesText : {
        fontSize : 20,
        marginVertical: 2,
        marginHorizontal:  10,
        alignSelf :'center'
    },
    subscribers : {
        marginHorizontal : 10,
        backgroundColor : '#ccd4de',
        marginVertical :5,
        borderRadius : 8,
        alignItems :'center',
        borderColor: '#eeeeee' ,
        borderWidth : 4,
        flexDirection: 'row',
        paddingHorizontal : 10
    },
})
