/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image, ScrollView, StyleSheet} from 'react-native';
import Test from './assets/test.jpg';
import image1 from './assets/imge.jpg'
import image2 from './assets/imge2.jpg'
import Title from './src/components/Title';
import Input from './src/components/Input';
import SignInPage from './src/components/Signin';

const App = () => { 
    
    return (
    <View>
        <SignInPage />
        {/* <Title text="Basic RN"/>
        <Title text="Basic ReactNative"/>
        <ScrollView>
        <Input placeholder="Input your name"/>
        <Input placeholder="Input your phone number"/>
            <Image source={image1} style={imageStyle.input}/>
            <Image source={image2} style={imageStyle.input}/>
            <Image source={Test} style={imageStyle.input}/>
        </ScrollView> */}
    </View>
    );
};

export default App;