import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { footerStyles } from '../../styles/footer.styles';

type CallsIconProps = {
    onPress: () => void;
};

const CallsIcon: React.FC<CallsIconProps> = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={footerStyles.iconContainer}>
            <Image
                source={require('../../assets/header/call1.jpeg')}
                style={footerStyles.icon}
            />
        </TouchableOpacity>
    );
};

export default CallsIcon;
