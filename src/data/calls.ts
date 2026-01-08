import { ImageSourcePropType } from 'react-native';

export interface CallLog {
    id: string;
    name: string;
    avatar: ImageSourcePropType;
    status: 'incoming' | 'outgoing' | 'silenced';
    callType: 'video' | 'audio' | 'schedule' | 'keypad' | 'mca2023';
    dateTime: string;
    count?: number;
}

export const QUICK_ACTIONS = [
    {
        id: '1',
        label: 'New call',
        icon: require('../assets/header/call1.jpeg'),
    },
    {
        id: '2',
        label: 'Keypad',
        icon: require('../assets/call/key2.jpeg'),
    },
    {
        id: '3',
        label: 'Schedule',
        icon: require('../assets/call/call2.png'),
    },
    {
        id: '4',
        label: 'MCA2023',
        icon: require('../assets/community/bullhorn.png'),
    },
];

export const CALLS_DATA: CallLog[] = [
    {
        id: '1',
        name: 'Abi',
        avatar: require('../assets/header/Dp/first.png'),
        status: 'incoming',
        callType: 'video',
        dateTime: 'Yesterday, 9:45 PM',
    },
    {
        id: '2',
        name: 'Office',
        avatar: require('../assets/call/v7.jpg'),
        status: 'outgoing',
        callType: 'audio',
        dateTime: 'Today, 10:15 AM',
        count: 2,
    },
    {
        id: '3',
        name: 'College Group',
        avatar: require('../assets/call/v6.jpg'),
        status: 'silenced',
        callType: 'schedule',
        dateTime: 'Monday, 8:00 AM',
    },
];
