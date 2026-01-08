// src/data/communities.ts

export interface Group {
    id: string;
    name: string;
    lastMessage: string;
    date: string;
    isAnnouncement?: boolean;
}

export interface Community {
    id: string;
    title: string;
    groups: Group[];
    image?: any;
}

/**
 * Shared community image
 * (Same image used for all communities as requested)
 */
const COMMUNITY_IMAGE = require('../assets/community/rvs.jpg');

export const COMMUNITIES_DATA: Community[] = [
    {
        id: '1',
        title: 'RVS GROUP Sulur',
        image: COMMUNITY_IMAGE,
        groups: [
            {
                id: 'g1',
                name: 'Announcements',
                lastMessage: '+91 96299 75854: Apply',
                date: '04/01/26',
                isAnnouncement: true,
            },
            {
                id: 'g2',
                name: 'RVS MCA Placement 20...',
                lastMessage: '+91 96299 75854: 📌 Hiring: Frontend...',
                date: '02/12/25',
            },
        ],
    },

    {
        id: '2',
        title: 'StylesWay T-Shirt Printing',
        image: COMMUNITY_IMAGE,
        groups: [
            {
                id: 'g3',
                name: 'Announcements',
                lastMessage: '~ 😁😁😁 removed the group "General"',
                date: '18/02/25',
                isAnnouncement: true,
            },
            {
                id: 'g4',
                name: 'StylesWay T-Shirts',
                lastMessage: '+91 63796 38928: Full sleeve...',
                date: '12/12/25',
            },
        ],
    },

    {
        id: '3',
        title: 'React Native Devs',
        image: COMMUNITY_IMAGE,
        groups: [
            {
                id: 'g5',
                name: 'Announcements',
                lastMessage: 'Meeting at 5 PM today',
                date: '01/01/26',
                isAnnouncement: true,
            },
            {
                id: 'g6',
                name: 'RN Tips & Tricks',
                lastMessage: 'Check out the new hooks feature!',
                date: '30/12/25',
            },
        ],
    },
];
