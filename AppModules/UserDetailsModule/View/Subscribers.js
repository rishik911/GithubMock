import React from "react";
import {View, Text, Image, FlatList} from "react-native";
import {connect} from "react-redux";
import {DetailedStyle} from "./Styles/detailedStyle";
import Header from "../../UserListModule/View/Header";
import {isValidElement} from "../../../MyApp/Utils/helpers";

const Subscribers = (props) => {

   const renderList = (data)=> {
       const {item} = data
       return(
           <View style={DetailedStyle.subscribers}>
               <Image style={{width : 100 , height : 100 , borderRadius : 50}} source={{uri: item.avatar_url }}/>
               <Text style={{left : 100 , fontSize : 20 , fontWeight :'bold'}}>{item.login}</Text>
           </View>
       )
   }
    return(
        <View>
            <Header showBackArrow={true} pageTitle='Subscribers' navigation={props.navigation} />
            {isValidElement(props.followersList) && <FlatList data={props.followersList} renderItem={renderList} />}
        </View>
    )
}

const mapStateToProps = state => ({
    followersList:state.userListState.followersList
});

export default connect(mapStateToProps)(Subscribers)
