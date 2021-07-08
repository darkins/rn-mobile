import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet } from 'react-native';
import WalletBalanceScreen from '../screens/WalletScreens/WalletBalanceScreen';
import WalletVoucherScreen from '../screens/WalletScreens/WalletVoucherScreen';
import colors from '../config/colors';

const Tab = createMaterialTopTabNavigator();

const Styles = StyleSheet.create({
    navigation: {
        backgroundColor: colors.white,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        height: 50,
        flexDirection: 'column',
    },
    activeTintColor: {
        color: colors.cta_primary,
    },
    textBottom: {
        fontSize: 12,
        fontFamily: 'MontserratBold',
        letterSpacing: 0.2,
        color: colors.cta_secondary,
        textTransform: 'none',
    },
    line: {
        backgroundColor: colors.cta_primary,
        width: 65,
        marginLeft: 30,
        height: 2,
    },
});

function WalletBalanceNavigation(props: any) {
    const { navigation } = props;
    return <WalletBalanceScreen navigation={navigation} />;
}

function WalletVoucherNavigation(props: any) {
    const { navigation } = props;
    return <WalletVoucherScreen navigation={navigation} />;
}

export default function TabsWallet() {
    return (
        <Tab.Navigator
            initialRouteName="WalletBalanceScreen"
            tabBarOptions={{
                activeTintColor: '#3147E4',
                indicatorStyle: Styles.line,
                labelStyle: Styles.textBottom,
                style: Styles.navigation,
            }}
        >
            <Tab.Screen
                name="WalletBalanceScreen"
                component={WalletBalanceNavigation}
                options={{ tabBarLabel: 'My Account' }}
            />
            <Tab.Screen
                name="WalletVoucherScreen"
                component={WalletVoucherNavigation}
                options={{ tabBarLabel: 'Vouchers' }}
            />
        </Tab.Navigator>
    );
}
