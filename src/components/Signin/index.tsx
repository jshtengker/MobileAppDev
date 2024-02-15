/* eslint-disable prettier/prettier */
import React from "react";
import {Text, View, StyleSheet, TextInput, TouchableOpacity}  from "react-native";

const SignInPage = () => {
    return (
        <View>
            <Text style={style.header}> Welcome </Text>
            <Text style={style.inputTitle}> Username </Text> 
            <TextInput placeholder="Masukkan username anda" style={style.input} />
            <Text style={style.inputTitle}> Password </Text>
            <TextInput placeholder="Masukkan password anda" style={style.input} />
            <TouchableOpacity style={style.button}>
            <Text>Sign In</Text>
            </TouchableOpacity>
        </View>
    )
};

const style = StyleSheet.create({
    input: {
        borderWidth: 1,
        margin: 20,
        marginTop: 5,
        padding: 10,
        paddingLeft: 15,
        borderRadius: 10,
    },
    header: {
        fontSize: 35, 
        color: 'white', 
        fontWeight:'bold', 
        textAlign:'left',
        margin: 20,
        marginLeft: 0,
        marginBottom: 30,
        padding: 10,
    },
    inputTitle: {
        fontSize: 15,
        marginBottom: 0,
        marginLeft: 20,
        padding: 0,
    },
    button: {
        width: 300,
        marginLeft: 30,
        borderRadius: 10,
        marginVertical: 15,
        alignItems: "center",
        backgroundColor: "#FF7800",
        padding: 10,
    }
})


export default SignInPage;

