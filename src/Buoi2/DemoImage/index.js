import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TextInput} from 'react-native';

export default class DemoImage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{borderRadius: 1000, width: 200, height: 200}}
          source={require('./cat.jpg')}
        />
        <Image
          style={{width: 200, height: 200, borderRadius: 20}}
          source={{
            uri: 'https://vnn-imgs-f.vgcloud.vn/2021/09/07/09/chu-meo-noi-tieng-mang-xa-hoi-voi-phong-cach-thoi-trang-sanh-dieu.jpeg',
          }}
        />
        <TextInput style={styles.txtInput} placeholder='Placeholder' keyboardType='number-pad' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtInput: {
      padding: 0,
    marginTop: 20,
    width: '80%',
    height: 30,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#788523'
  },
});
