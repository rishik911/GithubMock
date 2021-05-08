import React, {Component} from "react";
import {FlatList, ActivityIndicator, Text, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux";
import {getUserListAction , resetAction} from "../../UserListModule/Redux/UserListAction";
import {isValidElement} from "../../../MyApp/Utils/helpers";
import moment from "moment";
import {DetailedStyle} from "./Styles/detailedStyle";
import {UserListStyle} from "../../UserListModule/View/styles/UserListStyle";
import Header from "../../UserListModule/View/Header";

class DetailedView extends Component {
    state={
        showModal : false
    }
    componentWillUnmount() {
        this.props.resetAction()
    }

    renderRepo(data){
        const {item} = data
        return(
            <View style={DetailedStyle.mainContainer}>
                <Text style={DetailedStyle.repoName}>{item.name}</Text>
               <View style ={DetailedStyle.subContainer}>
                   <Text style={DetailedStyle.textStyle}>  Created on {moment(Date(item.created_at)).format('DD-MM-YYYY')}</Text>
                   <Text style={DetailedStyle.textStyle}>Last Push {moment(Date(item.pushed_at)).format('DD--MM-YYYY')}</Text>
               </View>
                <Text style={DetailedStyle.textStyle}> Forks {item.forks}</Text>
                <Text style={DetailedStyle.textStyle}> Watchers {item.watchers}</Text>
                <Text style={DetailedStyle.textStyle}> Default Branch  --> {item.default_branch}</Text>
            </View>
        )
    }
    renderFollowers() {
        const {followersList} = this.props
        if(isValidElement(followersList) && followersList.length >0) {
            return (
                <TouchableOpacity style={DetailedStyle.container}
                                  onPress={() => this.props.navigation.navigate('subscribers')}>
                    <Text style={DetailedStyle.stylesText}> Followers --> {followersList.length} </Text>
                </TouchableOpacity>
            )
        }
    }


    render(){
        const {repoList} = this.props
        return(
            <View>
                <Header showBackArrow={true} pageTitle='User Details' navigation={this.props.navigation} />
                {this.renderFollowers()}
                <Text style={{ alignSelf :'center', fontSize : 20 }}>REPOS</Text>
                {isValidElement(repoList) && repoList.length > 0  ? (
                    <FlatList data={repoList} renderItem={this.renderRepo.bind(this)} />
                ) : (<View style={{alignSelf :'center' , justifyContent : 'center'}}>
                    <ActivityIndicator size='large' color= 'black' />
                </View>)}

            </View>
        )
    }
}
const mapStateToProps = state => ({
    repoList : state.userListState.repoList,
    userList:state.userListState.userList,
    followersList:state.userListState.followersList
});

const mapDispatchToProps = {
    getUserListAction,
    resetAction
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailedView)
