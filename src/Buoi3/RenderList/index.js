import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import Alto_icon from './Images/Alto_icon.jpg';
import Alto_0 from './Images/Alto_0.jpg';

export default class RenderList extends Component {
  listGameInfo = [{
    id: 0,
    title: "Alto's Odyssey",
    icon: Alto_icon,
    subTitle:
      'Just beyond the horizon sits a majectic desert, vast and unexplored.',
    description:
      'Just beyond the horizon sits a majectic desert, vast and unexplored.\nJoin Alto and his friends',
    age: '9+',
    rating: 4.4,
    preview: Alto_0,
    backgroundColor: '#F4B940',
  },
  {
    id: 1,
    title: "Alto's Odyssey",
    icon: Alto_icon,
    subTitle:
      'Just beyond the horizon sits a majectic desert, vast and unexplored.',
    description:
      'Just beyond the horizon sits a majectic desert, vast and unexplored.\nJoin Alto and his friends',
    age: '9+',
    rating: 4.4,
    preview: Alto_0,
    backgroundColor: '#96CC96',
  },
  {
    id: 2,
    title: "Alto's Odyssey",
    icon: Alto_icon,
    subTitle:
      'Just beyond the horizon sits a majectic desert, vast and unexplored.',
    description:
      'Just beyond the horizon sits a majectic desert, vast and unexplored.\nJoin Alto and his friends',
    age: '9+',
    rating: 4.4,
    preview: Alto_0,
    backgroundColor: '#824671CC',
  },
]

renderListGameInfo = () => {
    return this.listGameInfo.map( (game, index) => {
        return (
            <View
                key = {index} 
                style={[
                    styles.info, 
                    {backgroundColor:game.backgroundColor}
                ]}>
                <View>
                    <Image style={styles.icon} source={game.icon} />
                </View>
                <View style={{marginLeft: 10, flexBasis: '80%'}}>
                    <Text style={styles.title}>{game.title}</Text>
                    <Text style={styles.subtitle}>{game.subTitle}</Text>
                </View>
            </View>
        );
    });
}

  render() {
    return (
      <View style={styles.container}>
        {/* <View 
            style={[
                styles.info, 
                {backgroundColor:this.listGameInfo[0].backgroundColor}
            ]}>
            <View>
                <Image style={styles.icon} source={this.listGameInfo[0].icon} />
            </View>
            <View style={{marginLeft: 10, flexBasis: '80%'}}>
                <Text style={styles.title}>{this.listGameInfo[0].title}</Text>
                <Text style={styles.subtitle}>{this.listGameInfo[0].subTitle}</Text>
            </View>
        </View> */}
        {/* Thay vì gọi từng cái ở trên thì gọi render như ở dưới */}
    
            {this.renderListGameInfo()}

      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#343434',
    },
    img: {
      height: 300,
      width: '98%',
    },
    info:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 20,
      padding: 10,
      height: 100,
      borderRadius: 10,
      width: '90%',
    },
    icon: {
      borderRadius: 5,
      height: 50,
      width: 50,
      borderColor: '#fff',
      borderWidth: 1,
    },
    title:{
      fontSize: 20, 
      color: '#fff', 
      fontWeight: '800',
    },
    subtitle:{
      fontSize: 14, color: '#fff'
    }
  
  });