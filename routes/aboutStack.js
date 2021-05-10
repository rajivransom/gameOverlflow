import { createStackNavigator} from 'react-navigation-stack';

import React from 'react';
import Header from '../shared/header';

import About from '../screens/about';
const screens={
  
    
    
        
    
    About:{
        screen: About,
        navigationOptions:({ navigation})=>{
            return {
             headerTitle:()=><Header navigation={navigation}/>
 
            }
         }
    },
    
    
    

};
const aboutStack=createStackNavigator(screens,{
    defaultNavigationOptions:{
       
        
        headerStyle:{
            backgroundColor:'yellow'
        }

    }
});
export default aboutStack;