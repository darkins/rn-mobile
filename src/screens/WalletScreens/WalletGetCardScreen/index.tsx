import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import i18n from 'i18n-js';
import tokens from '../../../i18n/tokens';
import Screen from '../../../components/Screen';
import H2 from '../../../components/Typography/H2';
import H4 from '../../../components/Typography/H4';
import ButtonPrimary from '../../../components/Button/ButtonPrimary';
import colors from '../../../config/colors';
import CardGetCard from '../../../components/CardGetCard';
import ButtonPopUpText from '../../../components/Button/ButtonPopUpText';

const stylesGoBack = StyleSheet.create({
    containerGoBack: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        padding: 16,
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
        height: 157,
    },
    marginTop: {
        marginTop: 16,
    },
    marginTop48: {
        marginTop: 48,
        alignItems: 'center',
    },
    colorTerciary: {
        color: colors.text_terciary,
    },
    buttonContainer: {
        marginVertical: 20,
        alignItems: 'center',
    },
});

type WalletGetCardProps = {
    navigation: any;
};

export default function WalletGetCardScreen(props: WalletGetCardProps) {
    const { navigation } = props;

    const {
        GetCard,
        Title,
        TextVirtualDebit,
        TextVirtualDebitCreation,
        TextDebitCard,
        TextDebitCardCreation,
        TextOrder,
        TextCardCreateSuccess,
        TextStoreMessage,
    } = tokens.app.walletGetCardScreen;

    return (
        <Screen>
            <ScrollView>
                <RectButton style={stylesGoBack.containerGoBack} onPress={() => navigation.goBack()}>
                    <View style={stylesGoBack.containerRow}>
                        <Ionicons name="arrow-back" size={24} color={colors.cta_primary} />
                        <H2 title={i18n.t(GetCard)} />
                    </View>
                    <Ionicons name="close" size={24} color={colors.cta_primary} />
                </RectButton>
                <View style={styles.container}>
                    <H4 title={i18n.t(Title)} style={styles.colorTerciary} />
                    <CardGetCard
                        img="elipseDuple"
                        title={i18n.t(TextVirtualDebit)}
                        detail={i18n.t(TextVirtualDebitCreation)}
                    />
                    <View style={styles.marginTop}>
                        <CardGetCard
                            img="elipse"
                            title={i18n.t(TextDebitCard)}
                            detail={i18n.t(TextDebitCardCreation)}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <ButtonPrimary title={i18n.t(TextOrder)} onPress={null} />
                    </View>
                    <View style={styles.marginTop48}>
                        <ButtonPopUpText
                            currentPage="getCard"
                            textButton={i18n.t(TextOrder)}
                            title={i18n.t(TextCardCreateSuccess)}
                            describe={i18n.t(TextStoreMessage)}
                        />
                    </View>
                </View>
            </ScrollView>
        </Screen>
    );
}
