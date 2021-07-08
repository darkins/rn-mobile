import React, { useState } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { Message, Bubble, GiftedChat, IMessage, User, Send } from 'react-native-gifted-chat';
import { Ionicons } from '@expo/vector-icons';
import Screen from '../../../components/Screen';
import AppHeader from '../../../components/AppHeader';

import colors from '../../../config/colors';

const styles = StyleSheet.create({
    sendingContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomComponentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const ChatScreen: React.FC = () => {
    const [messages, setMessages] = useState<IMessage[]>([
        {
            _id: 1,
            text: 'Hi Gabriela \n Thank you for submitting your application. I am currently reviewing it and will get back to you shortly.',
            user: {
                _id: 2,
                name: 'Michael',
                avatar: 'https://placeimg.com/140/140/any',
            },
            createdAt: new Date(),
        },
        {
            _id: 2,
            text: 'In the meantime please have a look at below links:',
            user: {
                _id: 2,
                name: 'Michael',
                avatar: 'https://placeimg.com/140/140/any',
            },
            createdAt: new Date(),
        },
    ]);
    const onSend = (newMsg: IMessage[]) => setMessages([...messages, ...newMsg]);
    const user: User = { _id: 1, name: 'me' };
    const inverted = false;

    function renderSend() {
        return (
            <Send text="" label="">
                <View style={styles.sendingContainer}>
                    <Ionicons name="md-navigate-circle-sharp" size={32} color={colors.cta_primary} />
                </View>
            </Send>
        );
    }

    function scrollToBottomComponent() {
        return (
            <View style={styles.bottomComponentContainer}>
                <Ionicons name="md-navigate-circle-sharp" size={36} color={colors.cta_primary} />
            </View>
        );
    }

    function renderLoading() {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color={colors.cta_primary} />
            </View>
        );
    }

    const customMessage = () => (
        <Message
            position="right"
            key="1"
            containerStyle={{
                left: {
                    alignItems: 'flex-start',
                },
                right: {
                    alignItems: 'flex-start',
                },
            }}
        />
    );

    function renderBubble() {
        return (
            <Bubble
                position="right"
                wrapperStyle={{
                    left: {
                        backgroundColor: `${colors.white}`,
                        marginBottom: 10,
                        padding: 5,
                        alignItems: 'flex-start',
                    },
                    right: {
                        backgroundColor: `${colors.cta_primary}`,
                        marginVertical: 10,
                        padding: 5,
                    },
                }}
                textStyle={{
                    left: {
                        color: `${colors.text_primary}`,
                    },
                    right: {
                        color: `${colors.white}`,
                    },
                }}
            />
        );
    }

    return (
        <Screen>
            <AppHeader />
            <View style={{ flex: 1 }}>
                <GiftedChat
                    {...{ messages, onSend, user, inverted }}
                    renderBubble={renderBubble}
                    renderSend={renderSend}
                    alwaysShowSend
                    placeholder="Type your message here..."
                    showUserAvatar
                    scrollToBottomComponent={scrollToBottomComponent}
                    showAvatarForEveryMessage
                    renderLoading={renderLoading}
                    renderMessage={() => customMessage()}
                />
            </View>
        </Screen>
    );
};

export default ChatScreen;
