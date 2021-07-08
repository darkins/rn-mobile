import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../../config/colors';
import Screen from '../../../components/Screen';

import i18n from '../../../i18n';
import tokens from '../../../i18n/tokens';

const house = require('../../../../assets/images/construction-house.png');

const { TextReceive, TextWithdraw } = tokens.app.walletExtraOptionsScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.cta_primary,
        height: 280,
    },
    button: {
        marginTop: 24,
        marginLeft: 36,
    },
    containerButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: 'MontserratBold',
        fontSize: 14,
        color: colors.white,
        marginLeft: 16,
    },
});

const styleGetCard = StyleSheet.create({
    containerText: {
        marginHorizontal: 20,
        alignItems: 'center',
        marginTop: 32,
    },
    title: {
        fontSize: 24,
        fontFamily: 'MontserratBold',
        lineHeight: 36,
        color: colors.white,
        marginTop: 24,
        textAlign: 'center',
    },
    subTitle: {
        fontSize: 14,
        fontFamily: 'MontserratRegular',
        color: colors.white,
        marginTop: 12,
    },
});

type CurrentPageProps = {
    currentPage: string;
    title: string;
    describe: string;
};

export default function WalletExtraOptionsScreen(props: CurrentPageProps) {
    const { currentPage, title, describe } = props;

    return (
        <Screen>
            {currentPage === '' && (
                <View style={styles.container}>
                    <RectButton style={styles.button}>
                        <View style={styles.containerButton}>
                            <Image source={house} />
                            <Text style={styles.buttonText}>{i18n.t(TextReceive)}</Text>
                        </View>
                    </RectButton>
                    <RectButton style={styles.button}>
                        <View style={styles.containerButton}>
                            <Image source={house} />
                            <Text style={styles.buttonText}>{i18n.t(TextWithdraw)}</Text>
                        </View>
                    </RectButton>
                </View>
            )}

            {currentPage !== '' && (
                <View style={styles.container}>
                    <View style={styleGetCard.containerText}>
                        <Ionicons name="checkmark-circle-outline" size={53} color="white" />
                        <Text style={styleGetCard.title}>{title}</Text>
                        <Text style={styleGetCard.subTitle}>{describe}</Text>
                    </View>
                </View>
            )}
        </Screen>
    );
}
