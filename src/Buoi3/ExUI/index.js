import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import Alto_icon from './Images/Alto_icon.jpg';
import Alto_0 from './Images/Alto_0.jpg';

const data = {
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
  backgroudColor: '#824671CC',
}

export default class ExUI extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={data.preview} />
        <View style={styles.info}>
          <View>
            <Image style={styles.icon} source={data.icon} />
          </View>
          <View style={{marginLeft: 10, flexBasis: '80%'}}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.subtitle}>{data.subTitle}</Text>
          </View>
        </View>
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
    backgroundColor: data.backgroudColor,
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
