import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const footerStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b141a', // WhatsApp Dark Theme background
  },
  // Search Bar Section
  searchContainer: {
    backgroundColor: '#202c33',
    marginHorizontal: 15,
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchText: {
    color: '#8696a0',
    fontSize: 16,
    marginLeft: 10,
  },
  // Filter Chips Section
  filterScroll: {
    paddingHorizontal: 15,
    marginVertical: 15,
    height: 40,
  },
  chip: {
    backgroundColor: '#202c33',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
    justifyContent: 'center',
    height: 32,
  },
  activeChip: {
    backgroundColor: '#0c6145', // WhatsApp green tint for active chip
  },
  chipText: {
    color: '#8696a0',
    fontSize: 14,
    fontWeight: '500',
  },
  activeChipText: {
    color: '#00a884',
  },
  // Chat List Section
  chatItem: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 12,
    alignItems: 'center',
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    backgroundColor: '#3b4a54',
  },
  chatDetails: {
    flex: 1,
    marginLeft: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#202c33',
    paddingBottom: 10,
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
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
    marginLeft: 5,
  },
  unreadText: {
    color: '#0b141a',
    fontSize: 12,
    fontWeight: 'bold',
  },
});