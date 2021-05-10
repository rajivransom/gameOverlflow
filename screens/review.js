import React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { globalstyles, images } from '../styles/global';
import Card from '../shared/card';
export default function Review({navigation}){
    const rating=navigation.getParam('rating');

   
    return(
        <View style={globalstyles.container}> 
        <Card>
            <Text style={globalstyles.Titletext}>Game:  {navigation.getParam('title')}</Text>
            <Text style={globalstyles.Titletext}>Genre: {navigation.getParam('body')}</Text>
            <View style={styles.rating}>
                <Text>Rating</Text>
                
                <Image source={images.ratings[rating]} />

            </View>
            
        </Card>
        <Image style={{width:200,height:200,alignItems:'center',left:'25%',marginTop:25,}} source={{uri:navigation.getParam('src')}}>
            </Image>   

        </View>
    )
}
const styles=StyleSheet.create({

});
