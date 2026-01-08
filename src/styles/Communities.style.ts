import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0b141a',
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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

    newCommunityRow: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        gap: 12,
    },

    communityContainer: {
        borderBottomWidth: 8,
        borderBottomColor: '#000',
        paddingBottom: 10,
    },

    communityHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderTopWidth: 0.5,
        borderTopColor: '#202c33',
        gap: 12,
    },

    communityTitle: {
        color: '#e9edef',
        fontSize: 16,
        fontWeight: '700',
        flexShrink: 1,
    },

    communityProfileImage: {
        width: 48,
        height: 48,
        borderRadius: 24, // makes it round
        resizeMode: 'cover',
        overflow: 'hidden',
    },

    iconPlaceholder: {
        width: 48,
        height: 48,
        backgroundColor: '#3b4a54',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },

    plusIconContainer: {
        position: 'absolute',
        bottom: -2,
        right: -2,
        backgroundColor: '#00a884',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#0b141a',
        width: 18,
        height: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },

    groupRow: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },

    announcementIcon: {
        backgroundColor: '#103629',
    },

    groupTextContainer: {
        flex: 1,
        marginLeft: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: '#202c33',
        paddingBottom: 10,
    },

    groupNameRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 4,
    },

    groupName: {
        color: '#e9edef',
        fontSize: 16,
    },

    dateText: {
        color: '#8696a0',
        fontSize: 12,
    },

    lastMessage: {
        color: '#8696a0',
        fontSize: 14,
    },

    viewAllRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 15,
        gap: 30,
    },

    viewAllText: {
        color: '#8696a0',
        fontSize: 15,
    },

    fab: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#202c33',
        padding: 15,
        borderRadius: 15,
        elevation: 5,
    },
});
