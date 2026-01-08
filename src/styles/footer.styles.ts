import { StyleSheet } from 'react-native';
export const footerStyles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'row',
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 28,
        borderTopWidth: 0.5,
        borderTopColor: '#202c33',
    },

    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    icon: {
        width: 40,
        height: 30,
        resizeMode: 'contain',
    },

    qrIcon: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
});
