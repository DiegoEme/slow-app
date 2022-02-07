import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
            blurRadius={2}
            style={styles.background}
            source={require('../assets/bg2.jpg')}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/snail.png')}></Image>
                <Text style={styles.title}>S L O W</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <AppButton title={'login'}></AppButton>
                <AppButton title={'register'} color={'secondary'}></AppButton>
            </View>    
            

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingVertical: 10
    },
    buttonsContainer: {
        paddingHorizontal: 40,
        width: '100%'
    },
    logo: {
        width: 120,
        height: 120,
    },
    logoContainer: {
        position: 'absolute',
        top: 100,
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: '800'
    }
})
//#EDCC8B'
//#A26360

export default WelcomeScreen;

