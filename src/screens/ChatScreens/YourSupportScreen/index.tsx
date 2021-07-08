import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import Screen from '../../../components/Screen';
import AppHeader from '../../../components/AppHeader';

import i18n from '../../../i18n';
import tokens from '../../../i18n/tokens';

import colors from '../../../config/colors';

const svdp = require('../../../../assets/images/svdp-logo.png');

const { YourSupport, Approved, Application, At, More, PleaseSee } = tokens.app.yourSupport;
const { Charity1, House, Vouchers, Immediate } = tokens.app.commonTerms;

const styles = StyleSheet.create({
    flexRow: {
        flexDirection: 'row',
    },
    supportBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.cta_primary,
        opacity: 0.5,
        borderRadius: 10,
        marginBottom: 20,
        padding: 10,
    },
    approvedSupport: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.cta_primary,
        borderRadius: 10,
        marginBottom: 20,
        padding: 10,
    },
    moreSupport: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.bg_two,
        borderRadius: 10,
        marginBottom: 20,
        padding: 20,
    },
    logo: {
        marginRight: 20,
        width: 128,
        height: 126,
    },
    charityName: {
        fontSize: 28,
        flexBasis: 180,
        color: colors.text_terciary,
    },
    pageHead: {
        fontSize: 32,
        fontFamily: 'MontserratBold',
        color: colors.text_terciary,
        marginBottom: 20,
    },
    pageContainer: {
        paddingVertical: 40,
        paddingHorizontal: 20,
    },
    bodyText: {
        paddingVertical: 5,
    },
    supportText: {
        marginBottom: 20,
    },
    icons: {
        color: colors.white,
        fontSize: 32,
        fontFamily: 'MontserratBold',
    },
    helpIcon: {
        color: colors.text_terciary,
        fontSize: 32,
        fontFamily: 'MontserratBold',
    },
    headingContainer: {
        flexDirection: 'row',
    },
    heading: {
        textTransform: 'uppercase',
        color: colors.text_primary,
        fontSize: 10,
        fontFamily: 'MontserratBold',
        marginBottom: 8,
    },
    green: {
        color: colors.success,
    },
    list: {
        fontFamily: 'MontserratBold',
        paddingHorizontal: 10,
        color: colors.white,
    },
});

export default function YourSupportScreen() {
    return (
        <Screen>
            <ScrollView>
                <AppHeader />
                <View style={styles.pageContainer}>
                    <View style={styles.flexRow}>
                        <Image style={styles.logo} source={svdp} />
                        <View>
                            <View style={styles.headingContainer}>
                                <Ionicons name="md-ellipse" style={styles.green} />
                                <Text style={styles.heading}>{i18n.t(Approved)}</Text>
                            </View>
                            <Text style={styles.charityName}>{i18n.t(Charity1)}</Text>
                        </View>
                    </View>
                    <Text style={styles.pageHead}>{i18n.t(YourSupport)}</Text>
                    <Text style={styles.supportText}>
                        {i18n.t(Application)} 22/05/2021 {i18n.t(At)} 15:41. {i18n.t(PleaseSee)}
                    </Text>
                    <View style={styles.approvedSupport}>
                        <Ionicons name="md-cash-outline" style={styles.icons} />
                        <Text style={styles.list}>{i18n.t(Immediate)}</Text>
                    </View>
                    <View style={styles.approvedSupport}>
                        <Ionicons name="md-home-outline" style={styles.icons} />
                        <Text style={styles.list}>{i18n.t(House)}</Text>
                    </View>
                    <View style={styles.supportBox}>
                        <Ionicons name="md-fast-food-outline" style={styles.icons} />
                        <Text style={styles.list}>{i18n.t(Vouchers)}</Text>
                    </View>
                    <View style={styles.moreSupport}>
                        <Text style={styles.bodyText}>{i18n.t(More)}</Text>
                    </View>
                </View>
            </ScrollView>
        </Screen>
    );
}
