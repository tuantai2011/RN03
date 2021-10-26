import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native'; //thư viện StyleSheet
export default class DemoStyleSheet extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxStyle}>
          <Text>Purple: #C9C9FF</Text>
        </View>
        <View style={[styles.boxStyle, styles.boxBlue]}>
          <Text>Blue: #3D85C6</Text>
        </View>
        <View style={[styles.boxStyle, styles.boxGreen]}>
          <Text>Green: #96CC96</Text>
        </View>
        <View style={[styles.boxStyle, styles.boxYellow]}>
          <Text>Yellow: #F48940</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //marginTop: 10,
    paddingHorizontal: 20, //theo chiều ngang
    paddingVertical: 20, // theo chiều dọc
    flex: 1, //container 100%
  },
  boxStyle: {
    backgroundColor: '#C9C9FF',
    height: 160,
    marginBottom: 20,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1, // Chia làm làm các phần bằng nhau cho đối tượng sử dụng
  },
  boxBlue: {
    backgroundColor: '#3D85C6',
  },
  boxGreen: {
    backgroundColor: '#96CC96',
  },
  boxYellow: {
    backgroundColor: '#F48940',
  },
});
