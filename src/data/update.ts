export interface StatusData {
    id: string;
    name: string;
    time: string;
    image: any; // supports local require images
    isUnread: boolean;
}

export const UPDATES_DATA: StatusData[] = [
    {
        id: '1',
        name: 'Mk❤️',
        time: '9:24 am',
        image: require('../assets/status/s1.jpg'),
        isUnread: true,
    },
    {
        id: '2',
        name: 'Swathy Mam',
        time: '3:04 pm',
        image: require('../assets/status/s2.jpg'),
        isUnread: true,
    },
    {
        id: '3',
        name: 'Surya st',
        time: '36 minutes ago',
        image: require('../assets/status/s5.jpg'),
        isUnread: true,
    },
    {
        id: '4',
        name: 'Surya',
        time: '6:34 am',
        image: require('../assets/status/s5.jpg'),
        isUnread: true,
    },
    {
        id: '5',
        name: 'Karrpa Samy St',
        time: '12:17 am',
        image: require('../assets/status/s5.jpg'),
        isUnread: true,
    },
    {
        id: '6',
        name: 'White Mca',
        time: '6:40 am',
        image: require('../assets/status/s7.jpg'),
        isUnread: true,
    },
];
