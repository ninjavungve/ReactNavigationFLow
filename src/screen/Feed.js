import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { users } from '../config/data';

class Feed extends Component {
  // static navigationOptions = ({ navigation }) => ({
  //   title: 'heellloo',
  //    headerTitleStyle : {textAlign: 'center',alignSelf:'center'},
  //       headerStyle:{
  //           backgroundColor:'white',
  //       },
  //   });

  onLearnMore = (user) => {
    // this.props.navigation.navigate('Details', { ...user });
    this.props.navigation.navigate('Details', { ...user });
  };

  render() {
    return (
      <ScrollView>
        <List>
          {users.map((user) => (
            <ListItem
              key={user.login.username}
              roundAvatar
              avatar={{ uri: user.picture.thumbnail }}
              title={`${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}`}
              subtitle={user.email}
              onPress={() => this.onLearnMore(user)}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}

export default Feed;
