import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0b141a',
    },

    searchContainer: {
        backgroundColor: '#202c33',
        marginHorizontal: 15,
        borderRadius: 25,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginTop: 10,
        marginBottom: 8,   // ⬅ clean spacing before filters
        flexDirection: 'row',
        alignItems: 'center',
    },

    searchIcon: {
        width: 16,
        height: 16,
        resizeMode: 'contain',
    },


    searchText: {
        color: '#8696a0',
        fontSize: 16,
        marginLeft: 10, // space after icon
    },


    filterScroll: {
        paddingHorizontal: 12,
        marginBottom: 20,   // space between filters and chat list
        height: 34,
    },



    chip: {
        backgroundColor: '#202c33',
        paddingHorizontal: 14,
        paddingVertical: 4,  // ⬅ reduced
        borderRadius: 18,
        marginRight: 8,
        justifyContent: 'center',
        height: 28,          // ⬅ reduced
    },


    activeChip: {
        backgroundColor: '#0c6145',
    },

    chipText: {
        color: '#8696a0',
        fontSize: 14,
        fontWeight: '500',
    },

    activeChipText: {
        color: '#00a884',
    },

    chatItem: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 8,   // ⬅ reduced from 12
        alignItems: 'center',
    },

    avatar: {
        width: 55,
        height: 55,
        borderRadius: 27.5,
        resizeMode: 'cover',
    },



    chatDetails: {
        flex: 1,
        marginLeft: 12,
        borderBottomWidth: 0.5,
        borderBottomColor: '#202c33',
        paddingBottom: 6,     // ⬅ reduced from 10
    },

    chatHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    chatName: {
        color: '#e9edef',
        fontSize: 16,
        fontWeight: 'bold',
    },

    chatTime: {
        color: '#8696a0',
        fontSize: 12,
    },

    chatFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    lastMessage: {
        color: '#8696a0',
        fontSize: 14,
        flex: 1,
    },

    unreadBadge: {
        backgroundColor: '#25d366',
        borderRadius: 10,
        minWidth: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 6,
    },

    unreadText: {
        color: '#0b141a',
        fontSize: 12,
        fontWeight: 'bold',
    },


    
});
