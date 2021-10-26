import React, {Component} from 'react';
import {View,Text} from 'react-native';

export default class DemoStyle extends Component{
    render(){
        return(
            <View style={{marginTop: 10}}>
                <View style ={{
                    backgroundColor: '#C9C9FF',
                    height: 160, marginTop: 10,
                    marginLeft:10, marginRight: 10,
                    borderRadius: 7, justifyContent: 'center', 
                    alignItems: 'center'
                }}>
                    <Text>Purple: #C9C9FF</Text>
                </View>
                <View style ={{backgroundColor: '#3D85C6',
                    height: 160, marginTop: 10, 
                    marginLeft:10, marginRight: 10, 
                    borderRadius: 7, 
                    justifyContent: 'center', 
                    alignItems: 'center'
                }}>
                    <Text>Blue: #3D85C6</Text>
                </View>
                <View style ={{
                    backgroundColor: '#96CC96', 
                    height: 160, 
                    marginTop: 10, 
                    marginLeft:10, 
                    marginRight: 10, 
                    borderRadius: 7, 
                    justifyContent: 'center', 
                    alignItems: 'center'
                }}>
                    <Text>Green: #96CC96</Text>
                </View>
                <View style ={{
                    backgroundColor: '#F48940', 
                    height: 160, 
                    marginTop: 10, 
                    marginLeft:10, 
                    marginRight: 10, 
                    borderRadius: 7, 
                    justifyContent: 'center', 
                    alignItems: 'center'
                }}>
                    <Text>Yellow: #F48940</Text>
                </View>
            </View>
        );
    }
}