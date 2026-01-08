import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { footerStyles } from '../../styles/footer.styles';

type UpdatesIconProps = {
    onPress: () => void;
};

const UpdatesIcon: React.FC<UpdatesIconProps> = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={footerStyles.iconContainer}>
            <Image
                source={require('../../assets/header/sts2.jpeg')}
                style={footerStyles.icon}
            />
        </TouchableOpacity>
    );
};

export default UpdatesIcon;
