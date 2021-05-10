import React,{useState} from 'react';
import Card from '../shared/card';
import { MaterialIcons} from '@expo/vector-icons';

import { FlatList, StyleSheet, Text, View, Button, TouchableOpacity, Modal } from 'react-native';
import { globalstyles } from '../styles/global';
import Reviewform from './reviewform';


export default function Home({ navigation}){
    const [modalopen,setModal]=useState(false);
    const [reviews,setReviews]=useState([
        {title:'Final fantasy',rating:5,body:'Action',key:'1',src:'https://i.ytimg.com/vi/2oqfjEzcMi4/maxresdefault.jpg'},
        {title:'Resident evil',rating:4,body:'shooting',key:'2',src:'https://fanatical.imgix.net/product/original/825516f3-77c0-48e3-a92f-cb1bfab33ce0.jpeg?auto=compress,format&w=400&fit=max'},
        {title:'Pubg',rating:2,body:'Shooting/fpp',key:'3',src:'https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/pubg_game_660_141020121948.jpg'},
        {title:'Valorant',rating:3,body:'Shooting/scifi',key:'4',src:'https://sm.pcmag.com/t/pcmag_in/review/v/valorant-f/valorant-for-pc_vjye.1200.jpg'},
        {title:'CSGO',rating:1,body:'Action/shooting',key:'5',src:'https://www.talkesport.com/wp-content/uploads/csgo-visibility-update-appears-to-reveal-opponents-through-walls-1.jpg'},
        

    ]);
    const addrev=(review)=>{
        review.key=Math.random().toString();
        setReviews((cr)=>{
            return [review,...cr];

        });
        setModal(false);
    };
   
    return(
        <View style={globalstyles.container}>
            <Modal visible={modalopen} animationType='slide' >
                <View style={styles.modalContent}>
                    
                    <MaterialIcons name='close' size={24} style={{marginBottom:10,borderWidth:1,borderColor:'yellow',padding:10,borderRadius:10,alignSelf:'center'}} onPress={()=>{setModal(false)}}/>
                    <Reviewform addrev={addrev}/>

                </View>

            </Modal>
            <MaterialIcons name='add' size={24} style={{marginBottom:10,borderWidth:1,borderColor:'yellow',padding:10,borderRadius:10,alignSelf:'center',color:'grey'}} onPress={()=>{setModal(true)}}/>
            
            <FlatList
            data={reviews}
            renderItem={({ item })=>(
                <TouchableOpacity
                onPress={()=>navigation.navigate('Review',item)}
                >
                    <Card>
                    <MaterialIcons name='gamepad' size={28}  style={styles.icon}
                    />
                    <Text style={globalstyles.Titletext}>{ item.title }</Text>
                    </Card>

                </TouchableOpacity>
                
            )}
            />
           
            

        </View>
    )
}
const styles=StyleSheet.create({
    
    icon:{
        position:'absolute',
        left:260
    },
    modalToggle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  }
});