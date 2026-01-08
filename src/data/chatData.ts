export interface ChatItem {
    id: string;
    name: string;
    lastMsg: string;
    time: string;
    unreadCount?: number;
    avatar: any;
}

export const CHAT_DATA: ChatItem[] = [
    {
        id: '1',
        name: 'Vishnu 🖤 (You)',
        lastMsg: 'Photo',
        time: '02/01/26',
        avatar: require('../assets/header/Dp/first.png'),
    },
    {
        id: '2',
        name: 'Google Aspirants 🤝',
        lastMsg: '+91 96547 98278: 4 jan',
        time: '3:24 am',
        unreadCount: 210,
        avatar: require('../assets/header/Dp/g2.png'),
    },
    {
        id: '3',
        name: 'Full Stack Developers 👋',
        lastMsg: 'https://chat.wh...',
        time: 'Yesterday',
        unreadCount: 5,
        avatar: require('../assets/header/Dp/r1.jpg'),
    },
    {
        id: '4',
        name: 'Vishnu 🖤 (You)',
        lastMsg: 'Photo',
        time: '02/01/26',
        avatar: require('../assets/header/Dp/first.png'),
    },
    {
        id: '5',
        name: 'Google Aspirants 🤝',
        lastMsg: '+91 96547 98278: 4 jan',
        time: '3:24 am',
        unreadCount: 210,
        avatar: require('../assets/header/Dp/g2.png'),
    },
    {
        id: '6',
        name: 'Full Stack Developers 👋',
        lastMsg: 'https://chat.wh...',
        time: 'Yesterday',
        unreadCount: 5,
        avatar: require('../assets/header/Dp/r1.jpg'),
    },
    {
        id: '7',
        name: 'Vishnu 🖤 (You)',
        lastMsg: 'Photo',
        time: '02/01/26',
        avatar: require('../assets/header/Dp/first.png'),
    },
    {
        id: '8',
        name: 'Google Aspirants 🤝',
        lastMsg: '+91 96547 98278: 4 jan',
        time: '3:24 am',
        unreadCount: 210,
        avatar: require('../assets/header/Dp/g2.png'),
    },
    {
        id: '9',
        name: 'Full Stack Developers 👋',
        lastMsg: 'https://chat.wh...',
        time: 'Yesterday',
        unreadCount: 5,
        avatar: require('../assets/header/Dp/r1.jpg'),
    },
];

export const filters: string[] = [
    'All',
    'Unread',
    'Favourites',
    'Groups',
];
