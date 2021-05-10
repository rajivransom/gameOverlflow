import React from 'react';
import {StyleSheet, Text, View, Image,ImageBackground} from 'react-native';
import { MaterialIcons} from '@expo/vector-icons';
import { globalstyles } from '../styles/global';


export default function Header({ navigation }){
    
    return(
        <View  style={styles.header}>

           <MaterialIcons name='menu' size={28}  style={styles.icon}/>
            <View>
                <Image source={{uri:'https://banner2.cleanpng.com/20190213/ybi/kisspng-sniper-esports-royalty-free-logo-illustration-evancrips-altel-cyber-g-5c6499d03ab9f4.9983346815500968482406.jpg'}}></Image>
                <Text style={styles.TT}><MaterialIcons name="videogame-asset" size={25}/>GameOverflow</Text>
            </View>
        </View>
    )
};
const styles=StyleSheet.create({
    header:{
        width:'100%',
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        
        
    
    },
    TT:{
        fontWeight:'bold',
        fontSize:20,
        color:'#333',
        letterSpacing:1,
    },
    icon:{
        position:'absolute',
        left:16
    }
})
