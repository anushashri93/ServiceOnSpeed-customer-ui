import React from 'react'
import { View, Text,TouchableOpacity} from 'react-native';
import { createStackNavigator } from 'react-navigation';

//components
import Offers from '../components/Offers';
export default OffersPage = createStackNavigator({
    KnowServicesScreen : {
        screen : Offers,
        navigationOptions: ({ navigation }) => ({
               headerStyle: {
                 backgroundColor: '#015b63',
               },
})
    }
})