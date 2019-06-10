import React from 'react'
import { View, Text,TouchableOpacity} from 'react-native';
import Icon from '../components/CustomIcon';
import { createStackNavigator } from 'react-navigation';

//components
import KnowServices from '../components/KnowServices';
export default KnowYourServices = createStackNavigator({
    KnowServicesScreen : {
        screen : KnowServices,
        navigationOptions: ({ navigation }) => ({
               headerStyle: {
                 backgroundColor: '#015b63',
               },
               headerLeft: (
                <View style={{ left: 12 }}>
                    <Icon
                        size={25}
                        name="menu"
                        color="#ffffff"
                        onPress={() => navigation.openDrawer()}
                    />
                </View>
            )
        })
    }
})