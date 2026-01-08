// src/screens/CommunitiesScreen.tsx
import React from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    ScrollView,
    Image,
} from 'react-native';

import { styles } from '../styles/Communities.style';
import { COMMUNITIES_DATA, Community, Group } from '../data/communities';
import Footer from '../components/Footer/Footer';

// Local icons
const icons = {
    bullhorn: require('../assets/community/bullhorn.png'),
    camera: require('../assets/header/cam.png'),
    search: require('../assets/header/qr.png'),
    more: require('../assets/header/qr.png'),
    chevron: require('../assets/header/qr.png'),
    add: require('../assets/header/qr.png'),
    pencil: require('../assets/header/qr.png'),
};

const CommunitiesScreen: React.FC = () => {

    const renderGroup = (group: Group) => (
        <TouchableOpacity key={group.id} style={styles.groupRow}>
            <View style={[styles.iconPlaceholder, group.isAnnouncement && styles.announcementIcon]}>
                <Image
                    source={group.isAnnouncement ? icons.bullhorn : require('../assets/community/bullhorn.png')}
                    style={{ width: 24, height: 24, borderRadius: 12 }}
                />
            </View>

            <View style={styles.groupTextContainer}>
                <View style={styles.groupNameRow}>
                    <Text style={styles.groupName} numberOfLines={1}>{group.name}</Text>
                    <Text style={styles.dateText}>{group.date}</Text>
                </View>
                <Text style={styles.lastMessage} numberOfLines={1}>
                    {group.lastMessage}
                </Text>
            </View>
        </TouchableOpacity>
    );

    const renderCommunity = ({ item }: { item: Community }) => (
        <View style={styles.communityContainer}>
            <TouchableOpacity style={styles.communityHeader}>
                {/* ROUND PROFILE IMAGE – NO BACKGROUND */}
                <Image
                    source={item.image ?? require('../assets/community/m2.jpg')}
                    style={styles.communityProfileImage}
                    resizeMode="cover"
                />
                <Text style={styles.communityTitle} numberOfLines={1}>
                    {item.title}
                </Text>
            </TouchableOpacity>

            {item.groups.map(renderGroup)}

            <TouchableOpacity style={styles.viewAllRow}>
                <Image
                    source={icons.chevron}
                    style={{ width: 20, height: 20, tintColor: '#8696a0' }}
                />
                <Text style={styles.viewAllText}>View all</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>

            {/* HEADER */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Communities</Text>

            </View>

            {/* CONTENT */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 80 }}
            >
                <TouchableOpacity style={styles.newCommunityRow}>
                    <Image
                        source={require('../assets/community/p1.jpg')}
                        style={styles.communityProfileImage}
                        resizeMode="cover"
                    />
                    <Text style={[styles.communityTitle, { fontWeight: '500' }]}>
                        New community
                    </Text>
                </TouchableOpacity>

                <FlatList
                    data={COMMUNITIES_DATA}
                    renderItem={renderCommunity}
                    keyExtractor={(item) => item.id}
                    scrollEnabled={false}
                />
            </ScrollView>

            {/* FAB */}
            <TouchableOpacity style={styles.fab}>
                <Image
                    source={icons.pencil}
                    style={{ width: 20, height: 20, tintColor: '#e9edef' }}
                />
            </TouchableOpacity>

            {/* FOOTER */}
            <Footer />
        </View>
    );
};

export default CommunitiesScreen;
