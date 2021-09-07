import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'


export default function BtnSignUp(props) {
    return (

        <TouchableOpacity style={styles.container}>
            {props.icon}
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        borderWidth:0.3,
        borderColor:'#AFAFB3',
        backgroundColor:'#FFFFFF',
        padding:10,
        marginBottom:10,
        flexDirection:'row',
    },
    text:{
        color:'#111111',
        textAlign:'center',
        fontSize:16,
        width:'100%',
   }
})