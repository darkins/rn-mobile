import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

import i18n from 'i18n-js';
import colors from '../../../config/colors';
import Screen from '../../../components/Screen';
import ButtonIonicons from '../../../components/Button/ButtonIonicons';
import tokens from '../../../i18n/tokens';
import H1 from '../../../components/Typography/H1';
import H3 from '../../../components/Typography/H3';
import H4 from '../../../components/Typography/H4';
import H5 from '../../../components/Typography/H5';
import P1 from '../../../components/Typography/P1';

const flagEUA = require('../../../../assets/images/flagEUA.png');
const svdp26x26 = require('../../../../assets/images/svdp26x26.png');
const group26x26 = require('../../../../assets/images/Group26x26.png');
const upload = require('../../../../assets/images/shopping-cart-upload-1.png');

const vcard = require('../../../../assets/images/vcard.png');

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginVertical: 40,
    },
    containerBalanceDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16,
    },
    containerButton: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonRequest: {
        width: 50,
        height: 40,
        borderRadius: 4,
        backgroundColor: colors.cta_primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerButtonIcon: {
        flexDirection: 'row',
    },
    cardsContainer: {
        marginTop: 30,
    },
    containerTransactions: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    colorPrimary: {
        color: colors.cta_primary,
    },
    flexAlign: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    flatListContainer: {
        backgroundColor: colors.white,
        marginTop: 16,
        borderRadius: 20,
    },
    flatListCont: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    flatListContainerBody: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 20,
        padding: 16,
        width: '100%',
    },
    flatListLine: {
        backgroundColor: colors.bg_two,
        width: '90%',
        height: 1,
    },
    textAmount: {
        marginLeft: 10,
    },
    containerSuggested: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 64,
    },
    colorTerciary: {
        color: colors.text_terciary,
    },
    containerSuggestedRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
        marginBottom: 30,
    },
    card: {
        backgroundColor: colors.white,
        width: 150,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        paddingVertical: 16,
    },
    cardText: {
        textAlign: 'center',
    },
    buttonRequestOne: {
        width: 90,
        height: 30,
        borderRadius: 20,
        backgroundColor: colors.cta_primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonRequestOneText: {
        fontFamily: 'MontserratBold',
        fontSize: 10,
        textTransform: 'uppercase',
        color: colors.white,
    },
    logo: {
        width: 26,
        height: 26,
        marginRight: 10,
    },
    spacing: {
        paddingVertical: 5,
    },
});

const transactions = [
    {
        id: 1,
        icon: svdp26x26,
        describe: 'Saint Vincent de Paul',
        data: '15 May 2021, 20:15',
        amount: '+ $200',
    },
    {
        id: 2,
        icon: group26x26,
        describe: 'Walmart',
        data: '11 May 2021, 12:15',
        amount: '- $21.5',
    },
    {
        id: 3,
        icon: upload,
        describe: 'To Gabriela Brown',
        data: '1 May 2021, 11:05',
        amount: '- $1,000',
    },
    {
        id: 4,
        icon: svdp26x26,
        describe: 'Saint Vincent de Paul',
        data: '30 April 2020, 20:15',
        amount: '+ $1,000',
    },
];

type WalletBalanceProps = {
    navigation: any;
};

export default function WalletBalanceScreen(props: WalletBalanceProps) {
    const { navigation } = props;

    const nextPage = (screen: string) => {
        navigation.push(screen);
    };

    const { Title, Send, Receive, Transactions, SeeAll, SuggestedForYou, RequestPaymentCard, Request, Bank, Dollars } =
        tokens.app.walletBalanceScreen;

    const { AvailableCards } = tokens.app.commonTerms;

    return (
        <Screen>
            <View style={styles.container}>
                <H4 title={i18n.t(Title)} style={styles.colorTerciary} />
                <View style={styles.containerBalanceDetail}>
                    <View>
                        <H1 title="$200" style={styles.spacing} />
                        <H5 title={i18n.t(Dollars)} style={styles.spacing} />
                    </View>
                    <Image source={flagEUA} />
                </View>

                <View style={styles.containerButton}>
                    <ButtonIonicons
                        title={i18n.t(Send)}
                        onPress={() => nextPage('ScanqrCodeScreen')}
                        iconName="arrow-up-sharp"
                        iconSize={24}
                        colorIcon={colors.white}
                    />
                    <ButtonIonicons
                        title={i18n.t(Receive)}
                        onPress={() => nextPage('ScanqrCodeScreen')}
                        iconName="arrow-down-sharp"
                        iconSize={24}
                        colorIcon={colors.white}
                    />
                </View>

                <View style={styles.cardsContainer}>
                    <H4 title={i18n.t(AvailableCards)} style={styles.colorTerciary} />
                    <Image source={vcard} style={{ maxWidth: '100%' }} />
                </View>

                <View style={styles.containerTransactions}>
                    <H4 title={i18n.t(Transactions)} style={styles.colorTerciary} />
                    <RectButton onPress={() => nextPage('WalletTransactionsScreen')}>
                        <H4 title={i18n.t(SeeAll)} style={styles.colorPrimary} />
                    </RectButton>
                </View>

                <FlatList
                    style={styles.flatListContainer}
                    data={transactions}
                    keyExtractor={(item: any) => item.id}
                    renderItem={({ item }) => (
                        <RectButton onPress={() => nextPage('WalletTransactionDetailScreen')}>
                            <View style={styles.flatListCont}>
                                <View style={styles.flatListContainerBody}>
                                    <View style={styles.flexAlign}>
                                        <Image style={styles.logo} source={item.icon} />
                                        <View>
                                            <H4 title={item.describe} />
                                            <P1>{item.data}</P1>
                                        </View>
                                    </View>
                                    <H3 style={styles.textAmount} title={item.amount} />
                                </View>
                                <Text style={styles.flatListLine} />
                            </View>
                        </RectButton>
                    )}
                />

                <View style={styles.containerSuggested}>
                    <H4 title={i18n.t(SuggestedForYou)} style={styles.colorTerciary} />
                </View>

                <View style={styles.containerSuggestedRow}>
                    <View style={styles.card}>
                        <H4 title={i18n.t(RequestPaymentCard)} style={styles.cardText} />
                        <RectButton style={styles.buttonRequestOne} onPress={() => nextPage('WalletGetCardScreen')}>
                            <Text style={styles.buttonRequestOneText}>{i18n.t(Request)}</Text>
                        </RectButton>
                    </View>
                    <RectButton style={styles.card} onPress={() => nextPage('WalletAddBankAccountScreen')}>
                        <H4 title={i18n.t(Bank)} style={styles.cardText} />
                        <Ionicons name="add-circle" size={26} color={colors.cta_primary} />
                    </RectButton>
                </View>
            </View>
        </Screen>
    );
}
