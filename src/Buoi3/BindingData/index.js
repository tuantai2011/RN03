import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, TouchableHighlight} from 'react-native';

export default class BindingData extends Component {
  name = 'React Native 03';
  address = 'Nha Trang';
  info = 'No Login';

  // Bắt buột đặt đúng obj tên "state" để sau chạy phương thức "setState"
  state = {
    isLogin: false,
  };

  renderName() {
    if (this.state.isLogin) {
      return (
        //Hàm trả về thẻ Text chưa biến name1
        <>
          <Text> {this.name} </Text>
          <Text> {this.address} </Text>
        </>
      );
    }
    return <Text> {this.info} </Text>;
  }

  // chỗ này bắt buộc phải sử dung arrow function thì con trỏ this. mới thuộc class để chạy được phương thức setState
  onPressButton = (buttonName) => {
    console.log(buttonName +' press');
    this.setState({isLogin: true},() => {
      console.log(this.state.isLogin);
    }); // Sử dụng phương thức "setState" để chạy lại render khi có thay đổi
    // setState là phương thức bất cân đối, nghĩa là nó sẽ chạy // với các công việc còn lại
    // để lấy được giá trị đúng thì cần phải chạy xong mới gọi lại nên ta gọi bên trong
    // như thế này () => { console.log(this.state.isLogin);}
  };

  onPressButton1 = () => {
    console.log('Btn HightLight press');
    this.setState({isLogin: true},() => {
      console.log(this.state.isLogin);
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text> BindingData Component </Text>
        {/* gọi biến */}
        {/* <Text> {this.name} </Text> */}
        {/* gọi hàm trả về có sẵn thẻ Text*/}
        {this.renderName()}

        {/* <TouchableOpacity style={styles.btn} onPress={this.onPressButton}>  =====> Không truyền tham số */}
         {/*  =====> Truyền tham số khi onPress */}
        <TouchableOpacity style={styles.btn} onPress={() => {this.onPressButton('Btn Opacity')}}>
          <Text>Sign In</Text>
          <Text>Sign In</Text>
        </TouchableOpacity>

        <TouchableHighlight
          style={[styles.btn, styles.btnHightLight]}
          onPress={this.onPressButton1}
          underlayColor="gray">
          {/* Phải tạo thẻ ảo để bao lại # với TouchableOpacity */}
            <> 
                <Text>Sign In</Text>
                <Text>Sign In</Text>
            </>
      
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  btn: {
    backgroundColor: 'red',
    height: 50,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical:5,
  },
  btnHightLight:{
      backgroundColor:'#bbf'
  }
});
