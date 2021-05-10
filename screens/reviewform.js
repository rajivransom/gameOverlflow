import React from 'react';
import {Text, Button, StyleSheet, TextInput, View} from 'react-native';
import { globalstyles } from '../styles/global';
import { Formik } from 'formik';
export default function Reviewform({ addrev }){
    return(
        <View style={globalstyles.container}>
            <Formik
            initialValues={{ title:'',body:'',rating:''}}
            onSubmit={(values)=>{
                console.log(values)
                addrev(values);
                

            }}
            >
                {(props)=>(
                    <View>
                        <TextInput style={globalstyles.input} placeholder='Review Title' onChangeText={props.handleChange('title')} value={props.values.title}/>
                        <TextInput multiline style={globalstyles.input} placeholder='Review Body' onChangeText={props.handleChange('Body')} value={props.values.body}/>
                        <TextInput multiline style={globalstyles.input} placeholder='Rating' onChangeText={props.handleChange('rating')} value={props.values.rating} keyboardType={'numeric'}/>
                        <Button title='Submit' color='maroon' onPress={()=>{}}  />

                       
                    </View>
                )}

            </Formik>

        </View>
    )
}