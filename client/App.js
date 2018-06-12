import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      display: ''
    };
  }
  handleSubmit = () => {
    const emailObj = {
      email: this.state.email,
      password: this.state.password
    };
    // this.setState({ display: emailObj });
    axios.get('/test').then(data => alert(data));
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text>{JSON.stringify(this.state.display)}</Text>
          <TextInput
            style={styles.textInput}
            type="text"
            underlineColorAndroid="transparent"
            placeholder="email"
            value={this.state.email}
            onChangeText={text => this.setState({ email: text })}
          />
          <TextInput
            style={styles.textInput}
            type="password"
            underlineColorAndroid="transparent"
            placeholder="password"
            value={this.state.password}
            onChangeText={text => this.setState({ password: text })}
          />
          <Button title="Submit" onPress={this.handleSubmit} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  inputContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    width: '50%',
    marginTop: 15,
    paddingTop: 15,
    borderRadius: 12,
    textAlign: 'center'
  }
});
