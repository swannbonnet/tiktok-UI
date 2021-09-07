import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Btn from '../../components/btnsignup/BtnSignUp'

import Icon from 'react-native-vector-icons/AntDesign'

export default function SignUpScreen() {
    return (
        <View style={styles.container}> 
            <Icon name='questioncircleo' size={18} color={'#AFAFB3'} style={styles.question}/>

            <Text style={styles.title}>Sign up for TikTok</Text>
            <Text style={styles.subTitle} >Create a profile, follow other accounts, make your own videos, and more.</Text>
        
            <Btn icon={<Icon name='user' size={18} />} text={'Use phone or email'} />
            <Btn icon={<Icon name='facebook-square' size={18} />} text={'Continue with Facebook'} />
            <Btn icon={<Icon name='google' size={18} />} text={'Continue with Google'} />
            <Btn icon={<Icon name='twitter' size={18} />} text={'Continue with Twitter'} />
        
            <View style={styles.bottomContainer}>
                <Text style={styles.policy}>By signing up, you agree to our Terms of Service and acknoledge that you have read our Privacy Policy to learn how we collect, use, and share your data and our Cookies Policy to learn how we use cookies.</Text>
                <Text style={styles.loginContainer}>Already have an account ? <Text style={styles.login}>Log in</Text></Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF',
        padding:20,
        paddingTop:90,
    },
    question:{
        position:'absolute',
        top:30,
        right:30
    },
    title:{
        alignSelf:'center',
        color:'#111111',
        fontWeight:'600',
        fontSize:24,
        marginBottom:10,
    },

    subTitle:{
        color:'#AFAFB3',
        textAlign:'center',
        fontSize:14,
        marginBottom:30
    },
    bottomContainer:{
        position:'absolute',
        bottom:0,
        left:0,
        right:0
    },
    policy:{
        color:'#AFAFB3',
        fontSize:11,
        textAlign:'center',
        padding:20
    },
    loginContainer:{
        color:'#111111',
        fontSize:16,
        padding:20,
        backgroundColor:'#F8F9F9',
        textAlign:'center'
    },
    login:{
        color:'red'
    }
})
