import React from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    ScrollView,
    Image,
} from 'react-native';

import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import { homeStyles } from '../styles/home.styles';

import { CHAT_DATA, filters, ChatItem } from '../data/chatData';

const HomeScreen: React.FC = () => {
    const renderChatItem = ({ item }: { item: ChatItem }) => (
        <TouchableOpacity style={homeStyles.chatItem}>
            <Image source={item.avatar} style={homeStyles.avatar} />

            <View style={homeStyles.chatDetails}>
                <View style={homeStyles.chatHeader}>
                    <Text style={homeStyles.chatName} numberOfLines={1}>
                        {item.name}
                    </Text>

                    <Text
                        style={[
                            homeStyles.chatTime,
                            item.unreadCount ? { color: '#25d366' } : null,
                        ]}
                    >
                        {item.time}
                    </Text>
                </View>

                <View style={homeStyles.chatFooter}>
                    <Text style={homeStyles.lastMessage} numberOfLines={1}>
                        {item.lastMsg}
                    </Text>

                    {!!item.unreadCount && (
                        <View style={homeStyles.unreadBadge}>
                            <Text style={homeStyles.unreadText}>
                                {item.unreadCount}
                            </Text>
                        </View>
                    )}
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={homeStyles.container}>
            <Header />

            {/* Search */}
            <View style={homeStyles.searchContainer}>
                <Image
                    source={require('../assets/header/s1.png')}
                    style={homeStyles.searchIcon}
                />
                <Text style={homeStyles.searchText}>
                    Ask Meta AI or Search
                </Text>
            </View>

            {/* Filters */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={homeStyles.filterScroll}
            >
                {filters.map((filter, index) => (
                    <TouchableOpacity
                        key={filter}
                        style={[
                            homeStyles.chip,
                            index === 0 && homeStyles.activeChip,
                        ]}
                    >
                        <Text
                            style={[
                                homeStyles.chipText,
                                index === 0 && homeStyles.activeChipText,
                            ]}
                        >
                            {filter}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* Chat List */}
            <FlatList
                data={CHAT_DATA}
                keyExtractor={(item) => item.id}
                renderItem={renderChatItem}
                contentContainerStyle={{
                    paddingBottom: 250, // for footer
                    paddingTop: 8       // ⬅ extra space after filters
                }}
            />


            <Footer />
        </View>
    );
};

export default HomeScreen;
