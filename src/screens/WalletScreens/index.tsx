import * as React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import i18n from 'i18n-js';
import colors from '../../config/colors';
import Screen from '../../components/Screen';
import TabsWallet from '../../navigation/WalletNavigation';
import tokens from '../../i18n/tokens';
import H1 from '../../components/Typography/H1';

const styles = StyleSheet.create({
    containerHeader: {
        flexDirection: 'column',
        backgroundColor: colors.white,
    },
    containerTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
        backgroundColor: colors.white,
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    person: {
        fontSize: 32,
        color: colors.text_primary,
        marginRight: 18,
    },
    bell: {
        fontSize: 24,
        color: colors.text_primary,
        alignSelf: 'center',
    },
});

type WalletProps = {
    navigation: any;
};

export default function WalletDasboardScreen(props: WalletProps) {
    const { Title } = tokens.app.walletDasboardScreen;
    const { navigation } = props;

    const nextPage = (screen: string) => {
        navigation.push(screen);
    };
    return (
        <Screen>
            <View style={styles.containerTitle}>
                <H1 title={i18n.t(Title)} />
                <View style={styles.icons}>
                    <Ionicons name="md-person-circle" style={styles.person} onPress={() => nextPage('ProfileScreen')} />
                    <Ionicons name="md-notifications-outline" style={styles.bell} />
                </View>
            </View>
            <ScrollView>
                <TabsWallet />
            </ScrollView>
        </Screen>
    );
}
