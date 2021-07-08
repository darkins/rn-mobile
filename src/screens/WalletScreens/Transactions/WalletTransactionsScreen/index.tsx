import * as React from 'react';
import { useState } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import i18n from 'i18n-js';
import colors from '../../../../config/colors';
import Screen from '../../../../components/Screen';
import tokens from '../../../../i18n/tokens';

const svdp26x26 = require('../../../../../assets/images/svdp26x26.png');
const group26x26 = require('../../../../../assets/images/Group26x26.png');
const upload = require('../../../../../assets/images/shopping-cart-upload-1.png');
const search = require('../../../../../assets/images/search.png');

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flexDirection: 'column',
    },
    containerSearch: {
        backgroundColor: colors.white,
        paddingLeft: 16,
        paddingTop: 24,
        paddingRight: 16,
        paddingBottom: 24,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 13,
        borderBottomRightRadius: 13,
    },
    textInputSearch: {
        height: 44,
        width: '90%',
        fontFamily: 'MontserratRegular',
        fontSize: 16,
        backgroundColor: colors.bg_one,
        color: colors.text_primary,
        textAlign: 'center',
        borderBottomRightRadius: 13,
        borderTopRightRadius: 13,
    },
    icon: {
        height: 44,
        backgroundColor: colors.bg_one,
        borderBottomLeftRadius: 13,
        borderTopLeftRadius: 13,
        justifyContent: 'center',
        alignItems: 'center',
    },

    flatListTitle: {
        marginTop: 32,
        fontFamily: 'MontserratBold',
        fontSize: 10,
        lineHeight: 15,
        letterSpacing: 2,
        color: colors.text_terciary,
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
    logo: {
        width: 26,
        height: 26,
    },
    flatListLine: {
        backgroundColor: colors.text_terciary,
        width: '90%',
        height: 2,
    },
    flatListContainerItem: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '55%',
    },
    textDescribe: {
        fontFamily: 'MontserratBold',
        fontSize: 14,
        color: colors.text_terciary,
    },
    textDate: {
        fontFamily: 'MontserratRegular',
        fontSize: 12,
        color: colors.text_primary,
    },
    textAmount: {
        fontFamily: 'MontserratBold',
        fontSize: 12,
        color: colors.text_terciary,
    },
    containerGoBack: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingTop: 16,
        backgroundColor: colors.white,
    },
    textGoBack: {
        fontFamily: 'MontserratBold',
        fontSize: 18,
        color: colors.text_terciary,
        marginLeft: 12,
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

type WalletTransactionsProps = {
    navigation: any;
};

export default function WalletTransactionsScreen(props: WalletTransactionsProps) {
    const { navigation } = props;

    const nextPage = (screen: string) => {
        navigation.push(screen);
    };

    const { Search, Title } = tokens.app.walletTransactionsScreen;

    const [value, onChangeText] = useState(i18n.t(Search));
    return (
        <Screen>
            <ScrollView>
                <View>
                    <RectButton style={styles.containerGoBack} onPress={() => navigation.goBack()}>
                        <AntDesign name="arrowleft" size={24} color={colors.text_terciary} />
                        <Text style={styles.textGoBack}>{i18n.t(Title)}</Text>
                    </RectButton>
                </View>

                <View style={styles.containerSearch}>
                    <View style={styles.icon}>
                        <Image source={search} />
                    </View>
                    <TextInput
                        style={styles.textInputSearch}
                        onChangeText={(text: string) => onChangeText(text)}
                        value={value}
                    />
                </View>

                <View style={styles.container}>
                    <Text style={styles.flatListTitle}> May 2021 </Text>
                    <FlatList
                        style={styles.flatListContainer}
                        data={transactions}
                        keyExtractor={(item: any) => item.id}
                        renderItem={({ item }) => (
                            <RectButton onPress={() => nextPage('WalletTransactionDetailScreen')}>
                                <View style={styles.flatListCont}>
                                    <View style={styles.flatListContainerBody}>
                                        <View>
                                            <Image style={styles.logo} source={item.icon} />
                                        </View>
                                        <View style={styles.flatListContainerItem}>
                                            <Text style={styles.textDescribe}> {item.describe} </Text>
                                            <Text style={styles.textDate}> {item.data} </Text>
                                        </View>
                                        <Text style={styles.textAmount}> {item.amount} </Text>
                                    </View>
                                    <Text style={styles.flatListLine} />
                                </View>
                            </RectButton>
                        )}
                    />

                    <Text style={styles.flatListTitle}>APRIL 2021</Text>
                    <FlatList
                        style={styles.flatListContainer}
                        data={transactions}
                        keyExtractor={(item: any) => item.id}
                        renderItem={({ item }) => (
                            <RectButton onPress={() => nextPage('WalletTransactionDetailScreen')}>
                                <View style={styles.flatListCont}>
                                    <View style={styles.flatListContainerBody}>
                                        <View>
                                            <Image style={styles.logo} source={item.icon} />
                                        </View>
                                        <View style={styles.flatListContainerItem}>
                                            <Text style={styles.textDescribe}> {item.describe} </Text>
                                            <Text style={styles.textDate}> {item.data} </Text>
                                        </View>
                                        <Text style={styles.textAmount}> {item.amount} </Text>
                                    </View>
                                    <Text style={styles.flatListLine} />
                                </View>
                            </RectButton>
                        )}
                    />
                </View>
            </ScrollView>
        </Screen>
    );
}
