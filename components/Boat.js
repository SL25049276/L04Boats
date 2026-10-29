
import React from 'react';
import {View, Text, Image} from 'react-native';
import FontAwesome6 from '@expo/vector-icons/Ionicons';

// Ex1: User-defined component Boat with properties name and description
const Boat = ({name, description, icon_name, icon_color, image}) => {
    return (
        <View>
            <Text style={{fontSize: 24, color: 'grey'}}>
                <FontAwesome6 name={icon_name} size={24} color={icon_color} />
                {' '}{name}
            </Text>

            <Text style={{fontSize: 14, color: 'grey', marginBottom: 5}}>
                {description}
            </Text>

            <Image
                source={image}
                style={{width: 400, height: 340}}
                resizeMode="contain"
            />
        </View>
    );
};

export default Boat;

