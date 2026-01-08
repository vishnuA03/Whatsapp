import React, { useEffect } from 'react';
import { View, Image, StatusBar, Text } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { splashStyles } from '../styles/splash.styles';
import { RootStackParamList } from '../navigation/types';

type SplashNavProp = NativeStackNavigationProp<
    RootStackParamList,
    'Splash'
>;

const SplashScreen: React.FC = () => {
    const navigation = useNavigation<SplashNavProp>();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Home');
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={splashStyles.container}>
            <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />

            <Image
                source={require('../assets/splashImg/download.jpg')}
                style={splashStyles.logo}
            />

            {/* Bottom text */}
            <View style={splashStyles.bottomTextContainer}>
                <Text style={splashStyles.fromText}>from</Text>
                <Text style={splashStyles.metaText}>Meta</Text>
            </View>
        </View>
    );
};

export default SplashScreen;
