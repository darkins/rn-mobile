import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import i18n from 'i18n-js';
import Screen from '../../../components/Screen';
import colors from '../../../config/colors';
import ButtonPopUpText from '../../../components/Button/ButtonPopUpText';
import tokens from '../../../i18n/tokens';

const stylesGoBack = StyleSheet.create({
    containerGoBack: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingTop: 16,
        backgroundColor: colors.white,
        justifyContent: 'space-between',
    },
    textGoBack: {
        fontFamily: 'MontserratBold',
        fontSize: 18,
        color: colors.text_terciary,
        marginLeft: 12,
        marginBottom: 16,
    },
    containerRow: {
        flexDirection: 'row',
    },
});

const styles = StyleSheet.create({
    container: {
        marginTop: 32,
        marginHorizontal: 20,
    },
    title: {
        fontSize: 32,
        color: colors.text_primary,
        marginBottom: 16,
    },
    text: {
        fontSize: 14,
        fontFamily: 'MontserratRegular',
        color: colors.text_primary,
    },
    textBold: {
        fontSize: 14,
        fontFamily: 'MontserratBold',
        color: colors.text_primary,
    },
    marginTop32: {
        marginTop: 32,
    },
    marginTop48: {
        marginTop: 48,
        alignItems: 'center',
    },
    textInput: {
        fontFamily: 'MontserratBold',
        backgroundColor: colors.white,
        color: colors.cta_primary,
        borderRadius: 13,
        height: 40,
        marginTop: 4,
        paddingHorizontal: 10,
    },
});

type WalletAddBankAccountProps = {
    navigation: any;
};

export default function WalletAddBankAccountScreen(props: WalletAddBankAccountProps) {
    const { navigation } = props;

    const {
        GetCard,
        Title,
        TextText,
        TextRoutingNumber,
        TextRoutingNumberDigits,
        TextAccountNumber,
        TextAccountNumberDigits,
        TextPopUpTitle,
        TextPopUpDescribe,
    } = tokens.app.walletAddBankAccountScreen;

    const { Continue } = tokens.app.commonTerms;

    return (
        <Screen>
            <View>
                <RectButton style={stylesGoBack.containerGoBack} onPress={() => navigation.goBack()}>
                    <View style={stylesGoBack.containerRow}>
                        <Ionicons name="arrow-back" size={24} color={colors.text_terciary} />
                        <Text style={stylesGoBack.textGoBack}>{i18n.t(GetCard)}</Text>
                    </View>
                    <Ionicons name="close" size={24} color={colors.text_terciary} />
                </RectButton>
            </View>

            <View style={styles.container}>
                <Text style={styles.title}>{i18n.t(Title)}</Text>
                <Text style={styles.text}>{i18n.t(TextText)}</Text>
                <Text style={[styles.textBold, styles.marginTop32]}>
                    {i18n.t(TextRoutingNumber)} <Text style={styles.text}>({i18n.t(TextRoutingNumberDigits)})</Text>
                </Text>
                <TextInput style={styles.textInput} maxLength={9} />
                <Text style={[styles.textBold, styles.marginTop32]}>
                    {i18n.t(TextAccountNumber)} <Text style={styles.text}>({i18n.t(TextAccountNumberDigits)})</Text>
                </Text>
                <TextInput style={styles.textInput} maxLength={12} />
                <View style={styles.marginTop48}>
                    <ButtonPopUpText
                        currentPage="getCard"
                        textButton={i18n.t(Continue)}
                        title={i18n.t(TextPopUpTitle)}
                        describe={i18n.t(TextPopUpDescribe)}
                    />
                </View>
            </View>
        </Screen>
    );
}
