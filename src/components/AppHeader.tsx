import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import H3 from './Typography/H3';

import i18n from '../i18n';
import tokens from '../i18n/tokens';
import colors from '../config/colors';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingTop: 40,
        paddingBottom: 20,
        paddingHorizontal: 20,
        backgroundColor: colors.white,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginBottom: 20,
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        fontFamily: 'MontserratBold',
        fontSize: 32,
        color: colors.cta_primary,
    },
});

const { Charity1 } = tokens.app.commonTerms;

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.flexRow}>
                <Ionicons style={styles.icon} name="md-chevron-back-outline" />
                <H3 title={i18n.t(Charity1)} />
            </View>
            <Ionicons name="md-close-outline" style={styles.icon} />
        </View>
    );
}
