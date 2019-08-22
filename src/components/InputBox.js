import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default class InputBox extends Component {
    state = {
        userInput: "",
    };

    handleInput = text => {
        this.setState({ userInput: text })
    }

    handleButton = () => {
        this.props.marks.addUserOutput("> " + this.state.userInput)
        if(this.props.marks.isConnected()){
            this.props.marks.sendMessage(this.state.userInput)
        }

        this.setState({ userInput: "" })
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Input here"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleInput}
                    value={this.state.userInput}
                />
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={this.handleButton}
                >
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5,
        margin: "auto"
    },
    input: {
        padding: 10,
        margin: 10,
        height: 40,
        borderColor: "#7a42f4",
        borderWidth: 1,
        width: "60%"
    },
    submitButton: {
        backgroundColor: "#7a42f4",
        padding: 10,
        margin: 10,
        height: 40,
        width: "30%"
    },
    submitButtonText: {
        color: "white"
    }
});
