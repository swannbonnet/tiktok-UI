import React from 'react'
import { View, FlatList, Dimensions } from 'react-native';

import Post from '../../components/post/Post'
import listPosts from '../../components/post/listPosts'


export default function HomeScreen() {
    return (
        <View>
            <FlatList
                data={listPosts}
                renderItem={({item}) =>  <Post post={item}/>}
                showsVerticalScrollIndicator={false}
                snapToInterval={Dimensions.get('window').height}
                snapToAlignment={'start'}
                decelerationRate={'fast'}

            />
        </View>
    )
}
