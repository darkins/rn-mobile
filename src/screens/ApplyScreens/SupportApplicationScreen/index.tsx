import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import Screen from '../../../components/Screen';
import H1 from '../../../components/Typography/H1';
import H2 from '../../../components/Typography/H2';
import P1 from '../../../components/Typography/P1';
import H4 from '../../../components/Typography/H4';
import AppHeader from '../../../components/AppHeader';
import CheckBox from '../../../components/CheckBox';
import ButtonPrimary from '../../../components/Button/ButtonPrimary';

import i18n from '../../../i18n';
import tokens from '../../../i18n/tokens';
import colors from '../../../config/colors';

const { SupportApplication, Support, Assistance } = tokens.app.supportApplication;
const { Charity1, House, Vouchers, Immediate } = tokens.app.commonTerms;

const svdp = require('../../../../assets/images/svdp-logo.png');

const styles = StyleSheet.create({
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginVertical: 5,
        marginTop: 20,
    },
    logo: {
        marginHorizontal: 20,
        width: 100,
        height: 98,
    },
    pageContainer: {
        padding: 20,
    },
    icons: {
        color: colors.cta_primary,
        fontSize: 32,
        fontFamily: 'MontserratBold',
        marginRight: 10,
    },
    helpIcon: {
        color: colors.cta_secondary,
        fontSize: 32,
        fontFamily: 'MontserratBold',
    },
    checkboxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 70,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 40,
    },
});

type SupportAppProps = {
    navigation: any;
};

export default function SupportApplicationScreen(props: SupportAppProps) {
    const { navigation } = props;

    const nextPage = (screen: string) => {
        navigation.push(screen);
    };
    return (
        <Screen>
            <ScrollView>
                <RectButton onPress={() => navigation.goBack()}>
                    <AppHeader />
                </RectButton>

                <View style={styles.flexRow}>
                    <Image style={styles.logo} source={svdp} />
                    <H2 title={i18n.t(Charity1)} />
                </View>
                <View style={styles.pageContainer}>
                    <H1 title={i18n.t(SupportApplication)} />
                    <P1>{i18n.t(Support)}</P1>
                    <View style={styles.flexRow}>
                        <Ionicons name="md-cash-outline" style={styles.icons} />
                        <H4 title={i18n.t(Immediate)} />
                    </View>
                    <View style={styles.flexRow}>
                        <Ionicons name="md-fast-food-outline" style={styles.icons} />
                        <H4 title={i18n.t(Vouchers)} />
                    </View>
                    <View style={styles.flexRow}>
                        <Ionicons name="md-home-outline" style={styles.icons} />
                        <H4 title={i18n.t(House)} />
                    </View>
                    <View style={styles.checkboxContainer}>
                        <CheckBox label="I agree to Terms and Conditions" />
                        <Ionicons name="md-help-circle-outline" style={styles.helpIcon} />
                    </View>
                    <View style={styles.btnContainer}>
                        <ButtonPrimary title={i18n.t(Assistance)} onPress={() => nextPage('ShareDetails')} />
                    </View>
                </View>
            </ScrollView>
        </Screen>
    );
}
