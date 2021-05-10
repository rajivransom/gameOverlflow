import { createDrawerNavigator} from 'react-navigation-drawer';
import { createAppContainer} from 'react-navigation';
import homestack from './homestack';
import aboutStack from './aboutStack';

const rootNAV=createDrawerNavigator({
    Home:{
        screen: homestack,
        
    },
    About:{
        screen: aboutStack
    }
})
export default createAppContainer(rootNAV);