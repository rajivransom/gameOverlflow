import {StyleSheet} from 'react-native';
export const globalstyles=StyleSheet.create({
    container:{
        padding:30,
        flex:1
        
    },
    Titletext:{
        fontFamily:'nunito-bold',
        fontSize:28,
        color:'black'
        
        
    },
    paragraph:{
        marginVertical:8,
        lineHeight:20,

    },
    input:{
        borderWidth:1,
        borderColor:'#ddd',
        padding:10,
        fontSize:10,
        borderRadius:6,
        
    }
});
export const images={
    ratings:{
        '1': require('../assets/rating-1.png'),
        '2': require('../assets/rating-2.png'),
        '3': require('../assets/rating-3.png'),
        '4': require('../assets/rating-4.png'),
        '5': require('../assets/rating-5.png')
    }
};