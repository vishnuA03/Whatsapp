import { StyleSheet } from 'react-native';

export const headerStyles = StyleSheet.create({
    container: {
        height: 56,
        backgroundColor: '#0000',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        elevation: 2,
    },

    qrIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        opacity: 0.95,
    },



    leftContainer: {
        flex: 1,
        justifyContent: 'center',
    },

    centerContainer: {
        flex: 2,
    },

    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    logo: {
        width: 110,
        height: 50,
        resizeMode: 'contain',
    },

    icon: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
        marginLeft: 18,
    },

    cameraIcon: {
        width: 50,    // increased width
        height: 100,   // increased height
        resizeMode: 'contain',
        marginLeft: 18,
        // dark color
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalBox: {
        width: 260,
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 20,
        alignItems: 'center',
    },

    modalTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 10,
    },

    modalQr: {
        width: 180,
        height: 180,
        marginVertical: 15,
    },

    closeText: {
        color: '#007AFF',
        fontSize: 15,
    },

});
