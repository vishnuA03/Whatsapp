import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { footerStyles } from '../../styles/footer.styles';

type CommunitiesIconProps = {
    onPress: () => void;
};

const CommunitiesIcon: React.FC<CommunitiesIconProps> = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={footerStyles.iconContainer}>
            <Image
                source={require('../../assets/header/groups.png')}
                style={footerStyles.qrIcon}
            />
        </TouchableOpacity>
    );
};

export default CommunitiesIcon;
