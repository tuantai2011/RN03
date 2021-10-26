import React, {Component} from 'react';
import {View,Text} from 'react-native';

export default class DemoStyle extends Component{
    render(){
        return(
            <View style={{marginTop: 10}}>
                <View style ={[boxStyle]}>
                    <Text>Purple: #C9C9FF</Text>
                </View>
                <View style ={[boxStyle,boxBlue]}>
                    <Text>Blue: #3D85C6</Text>
                </View>
                <View style ={[boxStyle,boxGreen]}>
                    <Text>Green: #96CC96</Text>
                </View>
                <View style ={[boxStyle,boxYellow]}>
                    <Text>Yellow: #F48940</Text>
                </View>
            </View>
        );
    }
}

const boxStyle = {
    backgroundColor: '#C9C9FF',
    height: 160,
    marginTop: 10,
    marginLeft:10,
    marginRight: 10,
    borderRadius: 7,
    justifyContent: 'center', 
    alignItems: 'center'
};
const boxBlue={
    backgroundColor: '#3D85C6',
}
const boxGreen={
    backgroundColor: '#96CC96',
}
const boxYellow={
    backgroundColor: '#F48940',
}