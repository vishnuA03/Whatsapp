import { StyleSheet } from 'react-native';

export const splashStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
    },

    bottomTextContainer: {
        position: 'absolute',
        bottom: 40,
        alignItems: 'center',
    },

    fromText: {
        fontSize: 14,
        color: '#6B7280',
    },

    metaText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#111827',
    },
});
