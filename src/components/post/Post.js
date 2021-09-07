import React, {useState} from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback, Image, FlatList } from 'react-native'

import Video from 'react-native-video'

import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Fontisto from 'react-native-vector-icons/Fontisto'


export default function Post(props) {

    const {post} = props;
    console.log(post.user.imageUser)

    const [paused, setPaused] = useState(false)


    onPlayPause = () => {
        setPaused(!paused);
    }

    

    return (
    
        <TouchableWithoutFeedback onPress={onPlayPause} >
            <View style={styles.container}>
    
                <Video
                source={post.video}
                style={styles.video}
                repeat={true}
                resizeMode={'cover'}
                paused={paused}
                />

                <View style={styles.UIcontainer}>
                    <View style={styles.containerRight}>
                        
                        <Image style={styles.userImg} source={post.user.imageUser}/>

                        <View style={styles.iconContainer}>
                            <AntDesign  name={"heart"} color={"#FFFFFF"} size={30}/>
                            <Text style={styles.stats}>{post.likes}</Text>
                        </View>
                    
                        <View style={styles.iconContainer}>
                            <FontAwesome  name={"commenting"} color={"#FFFFFF"} size={30}/>
                            <Text style={styles.stats}>{post.comments}</Text>
                        </View>
                    
                        <View style={styles.iconContainer}>
                            <Fontisto  name={"share-a"} color={"#FFFFFF"} size={30}/>
                            <Text style={styles.stats}>{post.shares}</Text>
                        </View>
                    </View>
                
                
                    <View style={styles.containerBottom}>
                        <Text style={styles.user}>@{post.user.userName}</Text>
                        <Text style={styles.description}>{post.description}</Text>
                        <Text style={styles.song} ><Entypo  name={"beamed-note"} color={"#FFFFFF"} size={16}/> {post.song}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height: Dimensions.get('window').height
    },
    video:{
        position: 'absolute',
        top:0,
        bottom:0,
        right:0,
        left:0,
    },
    UIcontainer:{
        height:'100%',
        justifyContent:'flex-end',
        paddingBottom:130,
    },

    containerRight:{
        alignSelf:'flex-end',
        alignItems:'center',
        padding:10
    },
    userImg:{
        width:40,
        height:40,
        marginBottom:18,
        borderRadius:20,
        borderWidth:1,
        borderColor:"#FFFFFF",
    },
    iconContainer:{
        marginBottom:18,
    },
    stats:{
        color:"#FFFFFF",
        fontSize: 16,
        fontWeight:'400',
    },

    containerBottom:{
        padding:15,
    },
    user:{
        color:"#FFFFFF",
        fontSize: 16,
        fontWeight:'600',
        marginBottom:5,
    },
    description:{
        color:"#FFFFFF",
        fontSize: 16,
        fontWeight:'400',
        marginBottom:5,
    },
    song:{
        color:"#FFFFFF",
        fontSize:16,
        fontWeight:'400',
    },

    
})
