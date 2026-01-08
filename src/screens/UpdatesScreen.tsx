import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    SafeAreaView,
    TextInput,
} from 'react-native';

import { styles } from '../styles/update.style';
import Footer from '../components/Footer/Footer';
import { UPDATES_DATA, StatusData } from '../data/update';

const UpdatesScreen: React.FC = () => {
    const [searchText, setSearchText] = useState('');
    const updates: StatusData[] = UPDATES_DATA ?? [];

    // 🔍 Live Search Logic
    const filteredUpdates = updates.filter(item =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Updates</Text>

                <View style={styles.headerIcons}>
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/header/s1.png')}
                            style={{ width: 24, height: 24 }}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image
                            source={require('../assets/status/kolan1.jpeg')}
                            style={{ width: 24, height: 24 }}
                            resizeMode="cover"
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.sectionTitle}>Status</Text>

                {/* My Status */}
                <TouchableOpacity style={styles.statusItem}>
                    <View style={styles.avatarContainer}>
                        <Image
                            source={require('../assets/status/s6.jpg')}
                            style={styles.avatar}
                            resizeMode="cover"
                        />

                        <View style={styles.plusIconContainer}>
                            <Image
                                source={require('../assets/status/plus.png')}
                                style={{ width: 14, height: 14 }}
                                resizeMode="contain"
                            />
                        </View>
                    </View>

                    <View style={styles.textContainer}>
                        <Text style={styles.nameText}>Add status</Text>
                        <Text style={styles.subText}>
                            Disappears after 24 hours
                        </Text>
                    </View>
                </TouchableOpacity>

                {/* 🔍 Search Bar */}
                <TextInput
                    placeholder="Search status"
                    value={searchText}
                    onChangeText={setSearchText}
                    style={{
                        height: 40,
                        borderRadius: 8,
                        backgroundColor: '#F0F0F0',
                        paddingHorizontal: 12,
                        marginHorizontal: 16,
                        marginBottom: 10,
                    }}
                />

                <Text style={styles.recentTitle}>Recent updates</Text>

                {/* Filtered List */}
                {filteredUpdates.map(item => (
                    <TouchableOpacity key={item.id} style={styles.statusItem}>
                        <View style={styles.avatarContainer}>
                            <Image
                                source={item.image}
                                style={[
                                    styles.avatar,
                                    item.isUnread && styles.statusRing,
                                ]}
                                resizeMode="cover"
                            />
                        </View>

                        <View style={styles.textContainer}>
                            <Text style={styles.nameText}>{item.name}</Text>
                            <Text style={styles.subText}>{item.time}</Text>
                        </View>
                    </TouchableOpacity>
                ))}

                {/* No Result */}
                {filteredUpdates.length === 0 && (
                    <Text
                        style={{
                            textAlign: 'center',
                            marginTop: 20,
                            color: '#999',
                        }}
                    >
                        No results found
                    </Text>
                )}

                <View style={{ height: 100 }} />
            </ScrollView>

            <Footer />
        </SafeAreaView>
    );
};

export default UpdatesScreen;
