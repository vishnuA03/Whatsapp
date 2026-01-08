import React from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import { styles } from '../styles/calls.styles';
import { CALLS_DATA, QUICK_ACTIONS, CallLog } from '../data/calls';

const headerIcons = {
    search: require('../assets/header/s1.png'),
    menu: require('../assets/status/kolan1.jpeg'), // triple colon
};

const callTypeIcons = {
    video: require('../assets/call/v3.jpeg'),
    audio: require('../assets/header/call1.jpeg'),
    schedule: require('../assets/call/v4.png'),
    keypad: require('../assets/header/qr.png'),
    mca2023: require('../assets/header/qr.png'),
};

const CallScreen: React.FC = () => {

    const getCallTypeIcon = (type: CallLog['callType']) => {
        return callTypeIcons[type];
    };

    const renderCallItem = ({ item }: { item: CallLog }) => (
        <TouchableOpacity style={styles.callRow}>
            <Image source={item.avatar} style={styles.avatar} />

            <View style={styles.infoContainer}>
                <Text style={[styles.name, item.status === 'silenced' && styles.missedName]}>
                    {item.name} {item.count ? `(${item.count})` : ''}
                </Text>

                <View style={styles.statusRow}>
                    <Image
                        source={getCallTypeIcon(item.callType)}
                        style={styles.statusIcon}
                    />
                    <Text style={styles.dateTime}>{item.dateTime}</Text>
                </View>

                {item.status === 'silenced' && (
                    <Text style={styles.silencedText}>
                        Silenced by Do Not Disturb
                    </Text>
                )}
            </View>

            <TouchableOpacity>
                <Image
                    source={getCallTypeIcon(item.callType)}
                    style={styles.videoIcon}
                />
            </TouchableOpacity>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>

            {/* HEADER */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Calls</Text>

                <View style={styles.headerIcons}>
                    <Image source={headerIcons.search} style={styles.headerIcon} />
                    <Image source={headerIcons.menu} style={styles.headerIcon} />
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>

                {/* QUICK ACTIONS */}
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.topActionList}
                >
                    {QUICK_ACTIONS.map(action => (
                        <View key={action.id} style={styles.actionItem}>
                            <View style={styles.actionCircle}>
                                <Image source={action.icon} style={styles.actionIcon} />
                            </View>
                            <Text style={styles.actionLabel} numberOfLines={1}>
                                {action.label}
                            </Text>
                        </View>
                    ))}
                </ScrollView>

                <Text style={styles.recentHeader}>Recent</Text>

                <FlatList
                    data={CALLS_DATA}
                    renderItem={renderCallItem}
                    keyExtractor={item => item.id}
                    scrollEnabled={false}
                />
            </ScrollView>

            {/* FAB */}
            {/* <TouchableOpacity style={styles.fab}>
                <Image
                    source={callTypeIcons.video}
                    style={styles.fabIcon}
                />
            </TouchableOpacity> */}
        </View>
    );
};

export default CallScreen;
