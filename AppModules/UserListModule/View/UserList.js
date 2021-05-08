import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {getUserListAction} from '../Redux/UserListAction'
import {isValidElement} from "../../../MyApp/Utils/helpers";

class UserList extends React.Component {
  componentDidMount() {
    this.props.getUserListAction()
  }
  renderList(data){
    const  {item} = data
    console.log(item)
    return(
        <Text>{item.login}</Text>
    )
  }
  render() {
    console.log(this.props.userList)
    return (
      <View>
        {isValidElement(this.props.userList) ?  <FlatList data={this.props.userList} renderItem={this.renderList.bind(this)} /> : <Text> No data</Text>}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  userList : state.userListState.userList
});

const mapDispatchToProps = {
  getUserListAction
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
