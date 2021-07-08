import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DashboardScreen from '../screens/ApplyScreens/DashboardScreen';
import ChatScreen from '../screens/ChatScreens';
import WalletScreen from '../screens/WalletScreens';

import i18n from '../i18n';
import tokens from '../i18n/tokens';
import colors from '../config/colors';

const { Apply, Chat, Wallet } = tokens.app.commonTerms;

const Tab = createBottomTabNavigator();

function ApplyStack(props: any) {
    const { navigation } = props;
    return <DashboardScreen navigation={navigation} />;
}

function ChatStack(props: any) {
    const { navigation } = props;
    return <ChatScreen navigation={navigation} />;
}

function WalletStack() {
    return <WalletScreen navigation="" />;
}

type TabBarProps = {
    color: any;
    size: number;
};

export default function ApplyNavigation() {
    return (
        <Tab.Navigator
            initialRouteName="Incidents"
            tabBarOptions={{
                activeTintColor: `${colors.cta_primary}`,
                inactiveTintColor: `${colors.cta_secondary}`,
                labelStyle: {
                    fontSize: 14,
                    fontFamily: 'MontserratBold',
                    marginBottom: 20,
                },
                style: {
                    height: 95,
                    paddingVertical: 20,
                },
            }}
        >
            <Tab.Screen
                name="ApplyStack"
                component={ApplyStack}
                options={{
                    tabBarLabel: `${i18n.t(Apply)}`,
                    tabBarIcon: ({ color, size }: TabBarProps) => (
                        <Ionicons name="cash-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="ChatStack"
                component={ChatStack}
                options={{
                    tabBarLabel: `${i18n.t(Chat)}`,
                    tabBarIcon: ({ color, size }: TabBarProps) => (
                        <Ionicons name="chatbox-ellipses-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="WalletsStack"
                component={WalletStack}
                options={{
                    tabBarLabel: `${i18n.t(Wallet)}`,
                    tabBarIcon: ({ color, size }: TabBarProps) => (
                        <Ionicons name="wallet-outline" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
