import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Avatar } from 'react-native-paper';
import { RectButton } from 'react-native-gesture-handler';
import Screen from '../../../components/Screen';
import i18n from '../../../i18n';
import tokens from '../../../i18n/tokens';
import colors from '../../../config/colors';
import ButtonPopUpText from '../../../components/Button/ButtonPopUpText';

const { Send, SendPayment } = tokens.app.commonTerms;

const styles = StyleSheet.create({
    headContainer: {
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
    heading: {
        fontSize: 24,
        fontFamily: 'MontserratBold',
        paddingHorizontal: 10,
        color: colors.text_terciary,
    },
    flexRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    containerItem: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginHorizontal: 10,
        flexBasis: 150,
    },
    storeName: {
        fontFamily: 'MontserratBold',
        fontSize: 14,
        color: colors.text_terciary,
    },
    details: {
        fontFamily: 'MontserratRegular',
        fontSize: 12,
        color: colors.text_primary,
    },
    btnContainer: {
        justifyContent: 'center',
        marginVertical: 40,
        marginHorizontal: 20,
    },
    containerInput: {},
    textInput: {
        fontSize: 24,
        fontFamily: 'MontserratBold',
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.border,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        color: colors.text_secondary,
        minWidth: 110,
    },
    chevron: {
        fontSize: 32,
        color: colors.text_primary,
    },
    icon: {
        fontSize: 32,
        color: colors.text_primary,
    },
});

const store = [
    {
        id: 1,
        avatar: 'avatar',
        store: 'Walmart',
        number: '+00 736 846 12',
        address: '21 Ezie Parade Clovis, CA 93342, USA',
        balance: 'Balance: $200',
    },
];

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

type StorePaymentProps = {
    navigation: any;
};

export default function StorePaymentScreen(props: StorePaymentProps) {
    const { navigation } = props;
    return (
        <Screen>
            <View>
                <RectButton style={stylesGoBack.containerGoBack} onPress={() => navigation.goBack()}>
                    <View style={stylesGoBack.containerRow}>
                        <Ionicons name="arrow-back" size={24} color={colors.text_terciary} />
                        <Text style={stylesGoBack.textGoBack}>{i18n.t(SendPayment)}</Text>
                    </View>
                    <Ionicons name="md-scan-outline" size={24} color={colors.text_terciary} />
                </RectButton>
            </View>
            <FlatList
                data={store}
                keyExtractor={(item: any) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.container}>
                        <Avatar.Text size={32} label="GS" color={colors.white}>
                            {item.avatar}
                        </Avatar.Text>
                        <View style={styles.containerItem}>
                            <Text style={styles.storeName}> {item.store} </Text>
                            <Text style={styles.details}> {item.number} </Text>
                            <Text style={styles.details}> {item.address} </Text>
                        </View>
                        <View style={styles.containerInput}>
                            <TextInput style={styles.textInput} />
                            <Text style={styles.details}> {item.balance} </Text>
                        </View>
                    </View>
                )}
            />
            <View style={styles.btnContainer}>
                <ButtonPopUpText
                    currentPage="WalletExtraOptionsScreen"
                    textButton={i18n.t(Send)}
                    title={"You've sent $32 to Grocery Store"}
                    describe=""
                />
            </View>
        </Screen>
    );
}
