import * as React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import Screen from '../../../components/Screen';
import H4 from '../../../components/Typography/H4';

import i18n from '../../../i18n';
import tokens from '../../../i18n/tokens';

const vcard = require('../../../../assets/images/vcard.png');

const { AvailableCards } = tokens.app.commonTerms;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginVertical: 40,
    },
    vcard: {
        marginVertical: 20,
        maxWidth: '100%',
    },
});

export default function WalletCardsScreen() {
    return (
        <Screen>
            <View style={styles.container}>
                <H4 title={i18n.t(AvailableCards)} />
                <Image source={vcard} style={vcard} />
            </View>
        </Screen>
    );
}
