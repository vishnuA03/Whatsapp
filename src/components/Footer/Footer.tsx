// src/components/Footer/Footer.tsx
import React from 'react';
import { View } from 'react-native';
import ChatIcon from './ChatIcon';
import UpdatesIcon from './UpdatesIcon';
import CommunitiesIcon from './CommunitiesIcon';
import CallsIcon from './CallsIcon';
import { footerStyles } from '../../styles/footer.styles';
import { useNavigation } from '@react-navigation/native';

const Footer: React.FC = () => {
    const navigation = useNavigation<any>();

    return (
        <View style={footerStyles.container}>
            {/* CHAT = HOME */}
            <ChatIcon onPress={() => navigation.navigate('Home')} />

            <UpdatesIcon onPress={() => navigation.navigate('Updates')} />
            <CommunitiesIcon onPress={() => navigation.navigate('Communities')} />
            <CallsIcon onPress={() => navigation.navigate('Calls')} />
        </View>
    );
};

export default Footer;
