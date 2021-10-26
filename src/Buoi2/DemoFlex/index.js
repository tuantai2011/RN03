import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class DemoFlex extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/* Bên trong này 100% màn hình, được chia làm 3 phần, mỗi phần 1 */}
                {/* <View style={{flex: 1, backgroundColor: '#C9C9FF'}}></View>
                <View style={{flex: 1, backgroundColor: '#3D85C6'}}></View>
                <View style={{flex: 1, backgroundColor: '#F4B940'}}></View> */}

                <View style={styles.box}></View>
                <View style={[styles.box, styles.boxBlue]}></View>
                <View style={[styles.box, styles.boxGreen]}></View>
                <View style={[styles.box, styles.boxYellow]}></View>
                <View style={styles.box}></View>
                <View style={[styles.box, styles.boxBlue]}></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1, // Khai báo cho cái View Container là 1 (nghĩa là 100% màn hình)
    flexDirection: 'row', // Dàn hàng ngang
    flexWrap: 'wrap', // Tự động xuống hàng khi vượt quá màn hình
    justifyContent:'space-evenly'
  },
  box: {
    backgroundColor: '#C9C9FF',
    height: 100,
    width: 100,
    marginBottom: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
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