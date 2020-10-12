import React from 'react';
import { Image, View } from 'react-native';

export default Order = () =>{
    return <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
    <Image
    source={require("./../../assets/notFound.png")}
    style={{width:"100%", height:"30%"}}
    >
    </Image>
</View>
}