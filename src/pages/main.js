import React, {Component} from 'react';

import {View, Text} from 'react-native';

export default class main extends Component {

    static navigationOptions = {
        title:  'Main'
    }
  render() {
    return (
      <View>
        <Text>Pagina Main</Text>
      </View>
    );
  }
}
