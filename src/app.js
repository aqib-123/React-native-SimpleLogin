import React, { Component } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: ""
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
  }

  handleChangeName(name) {
    this.setState({ name });
  }
  handleChangeEmail(email) {
    this.setState({ email });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}> UserName</Text>
        <TextInput
          value={this.state.name}
          onChangeText={this.handleChangeName}
          placeholder="Enter Your Name"
          style={styles.inputStyle}
        />

        <Text style={styles.textStyle}> Email</Text>
        <TextInput
          value={this.state.email}
          onChangeText={this.handleChangeEmail}
          placeholder="Enter Your Email"
          style={styles.inputStyle}
        />
        <View style={styles.bottom}>
          <Text style={styles.bottomText}>UserName: {this.state.name} </Text>
          <Text style={styles.bottomText}>Email: {this.state.email} </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20
  },
  textStyle: {
    fontSize: 20,
    color: "#000000",
    marginBottom: 10,
    marginTop: 10
  },
  inputStyle: {
    backgroundColor: "#fff",
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "#007aff",
    color: "#007aff",
    fontSize: 16,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10
  },
  bottom: {
    marginTop: 100
  },
  bottomText: {
    backgroundColor: "#fff"
  }
});

export default App;
