import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {getUserListAction , getUserRepoAction , getUserFollowersAction} from '../Redux/UserListAction'
import {isValidElement} from "../../../MyApp/Utils/helpers";
import {UserListStyle} from "./styles/UserListStyle";
import Header from "./Header";
import {getSearchData} from "../Utils/helpers";

class UserList extends React.Component {
    state={
        searchText : null,
        filteredList : null
    }
  componentDidMount() {
    this.props.getUserListAction()
  }
  renderList(data){
    const  {item} = data
    return(
        <TouchableOpacity style={UserListStyle.mainContainer} onPress={()=> {this.props.navigation.navigate('detailedScreen', {
            data : item
        }) ,
            this.props.getUserFollowersAction(item.login.toLowerCase())
            this.props.getUserRepoAction(item.login.toLowerCase())}}>
          <Image
              style={UserListStyle.imageStyle
              }
              source={{ uri : item.avatar_url}}
          />
            <View>
                <Text style={UserListStyle.fontStyle }>{item.login}</Text>
            </View>

        </TouchableOpacity>
    )
  }

  handleSearch(value){
     let data = getSearchData(value , this.props.userList)
      if(isValidElement(data) && data.length >0){
          this.setState({
              filteredList : data
          })
      }
  }
  render() {
    return (
      <View>
          <Header resetList={()=> this.setState({filteredList : null})} pageTitle='User List' showSearch={true} callBackSearchValue={(value)=> this.handleSearch(value)}/>
        {isValidElement(this.props.userList) ?  <FlatList data={isValidElement(this.state.filteredList)
            && this.state.filteredList.length>0 ? this.state.filteredList :
            this.props.userList} renderItem={this.renderList.bind(this)} /> : <Text> No data</Text>}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  userList : state.userListState.userList
});

const mapDispatchToProps = {
  getUserListAction,
    getUserRepoAction,
    getUserFollowersAction
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
