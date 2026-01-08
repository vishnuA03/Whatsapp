// update.styles.ts
import { StyleSheet } from 'react-native';

export const COLORS = {
    background: '#0b141a',
    surface: '#121b22',
    textPrimary: '#e9edef',
    textSecondary: '#8696a0',
    accent: '#00a884', // WhatsApp Green
    border: '#202c33',
    floatingBtn: '#25d366',
    editBtn: '#202c33',
};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 15,
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: '500',
        color: COLORS.textPrimary,
    },
    headerIcons: {
    flexDirection: 'row',
    gap: 12,            // reduced gap between icons
},

headerIcon: {
    width: 18,           // smaller size
    height: 18,
    tintColor: '#e9edef',
    marginLeft: 12,
},

    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: COLORS.textPrimary,
        marginHorizontal: 16,
        marginVertical: 15,
    },
    statusItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    avatarContainer: {
        position: 'relative',
    },
    avatar: {
        width: 55,
        height: 55,
        borderRadius: 27.5,
        overflow: 'hidden', // IMPORTANT
    },
    statusRing: {
        borderColor: COLORS.accent,
        borderWidth: 2,
    },
    plusIconContainer: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: COLORS.accent,
        borderRadius: 12,
        width: 22,
        height: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: COLORS.background,
    },
    textContainer: {
        marginLeft: 15,
        flex: 1,
    },
    nameText: {
        color: COLORS.textPrimary,
        fontSize: 16,
        fontWeight: '600',
    },
    subText: {
        color: COLORS.textSecondary,
        fontSize: 14,
        marginTop: 2,
    },
    recentTitle: {
        fontSize: 13,
        color: COLORS.textSecondary,
        marginHorizontal: 16,
        marginTop: 20,
        marginBottom: 10,
        fontWeight: '500',
    },
    fabContainer: {
        position: 'absolute',
        bottom: 20,
        right: 16,
        alignItems: 'center',
        gap: 15,
    },


    mainFab: {
        backgroundColor: COLORS.floatingBtn,
        width: 55,
        height: 55,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
    },
});
