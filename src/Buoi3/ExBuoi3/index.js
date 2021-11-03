import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import angry from './Img/angry.png';
import care from './Img/care.png';
import haha from './Img/haha.png';
import like from './Img/like.png';
import love from './Img/love.png';
import sad from './Img/sad.png';

export default class ExBuoi3 extends Component {
  listIcon = [
    {
      status: angry,
    },
    {
      status: care,
    },
    {
      status: haha,
    },
    {
      status: like,
    },
    {
      status: love,
    },
    {
      status: sad,
    },
  ];

  state = {
    updateStatus: null,
  };

  onPressIcon = (iconStatus) => {
    this.setState({updateStatus: iconStatus});
  };

  renderListIcon = () => {
    return this.listIcon.map((icon, index) => {
      return (
        // <View key={index} style={styles.viewicon}>
          <TouchableOpacity key={index}
            onPress={() => {
              this.onPressIcon(icon.status);
            }}>
                <Image style={styles.imgicon} source={icon.status} />
          </TouchableOpacity>
        // </View>
      );
    });
  };

  renderImg = () => {
    // console.log(this.state.updateStatus);
    return <Image style={styles.img} source={this.state.updateStatus} />;
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.question}> Bạn đang cảm thấy thế nào? </Text>
        {this.renderImg()}
        <View style={styles.viewicon}>
            {this.renderListIcon()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  question: {
    fontSize: 25,
    fontWeight: '500',
    color: 'black',
  },
  img: {
    width: 200,
    height: 200,
    marginVertical: 50,
  },
  viewicon: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  imgicon: {
    width: 40,
    height: 40,
  },
});
