import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import Home from '../screens/home';
import Review from '../screens/review' ;
import About from '../screens/about';
import Header from '../shared/header';
import React from 'react';
const screens={
    Home:{
        screen:Home,
        navigationOptions:({ navigation})=>{
           return {
            headerTitle:()=><Header navigation={navigation}/>

           }
        }
    },
    
    Review:{
        screen:Review,
        navigationOptions:{
            title:'Get some reviews :)',
            
            
        },
        
    },
    About:{
        screen:About
    }
    
    
    

};
const homestack=createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'#444',
        
        headerStyle:{
            backgroundColor:'yellow'
        }

    }
});
export default homestack;