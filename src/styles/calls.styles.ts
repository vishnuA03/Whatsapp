import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0b141a',
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 15,
    },

    headerTitle: {
        color: '#e9edef',
        fontSize: 22,
        fontWeight: '500',
    },

    headerIcons: {
        flexDirection: 'row',
        gap: 20,
    },

    headerIcon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },

    topActionList: {
        paddingLeft: 16,
        paddingVertical: 10,
        marginBottom: 10,
    },

    actionItem: {
        alignItems: 'center',
        marginRight: 25,
        width: 70,
    },

    actionCircle: {
        width: 55,
        height: 55,
        borderRadius: 27.5,
        backgroundColor: '#202c33',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },


    actionIcon: {
        width: 24,        // 🔹 control icon size here
        height: 24,
        resizeMode: 'contain',
    },


    actionLabel: {
        color: '#8696a0',
        fontSize: 12,
    },

    recentHeader: {
        color: '#e9edef',
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 16,
        marginVertical: 10,
    },

    callRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },

    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },

    infoContainer: {
        flex: 1,
        marginLeft: 15,
    },

    name: {
        color: '#e9edef',
        fontSize: 16,
        fontWeight: '500',
    },

    missedName: {
        color: '#f15c6d',
    },

    statusRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },

    statusIcon: {
        width: 16,
        height: 16,
        resizeMode: 'contain',
        marginRight: 6,
    },

    dateTime: {
        color: '#8696a0',
        fontSize: 13,
    },

    silencedText: {
        color: '#8696a0',
        fontSize: 13,
        marginTop: 2,
    },

    videoIcon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },

    fab: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#00a884',
        width: 60,
        height: 60,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },

    fabIcon: {
        width: 28,
        height: 28,
        resizeMode: 'contain',
    },
});
