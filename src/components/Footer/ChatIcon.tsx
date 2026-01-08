import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { footerStyles } from '../../styles/footer.styles';

type ChatIconProps = {
    onPress: () => void;
};

const ChatIcon: React.FC<ChatIconProps> = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={footerStyles.iconContainer}>
            <Image
                source={require('../../assets/header/chat1.jpg')}
                style={footerStyles.icon}
            />
        </TouchableOpacity>
    );
};

export default ChatIcon;
