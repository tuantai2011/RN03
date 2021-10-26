import React, {Component} from 'react';
import {View, Text} from 'react-native';

//Stateful Component
class App extends Component{
    render() {
        return (
        <View style={{marginTop: 50}}>
            <Text style={{fontSize: 20, fontWeight: '700'}}>Demo Component</Text>
            <Text style={{fontSize: 18}}>Welcome to React Native</Text>
        </View>
        );
    }
}
export default App;
