import * as React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons';

import i18n from 'i18n-js';
import colors from '../../../../config/colors';
import Screen from '../../../../components/Screen';
import ButtonIonicons from '../../../../components/Button/ButtonIonicons';
import tokens from '../../../../i18n/tokens';

const food = require('../../../../../assets/images/Group26x26.png');
const map = require('../../../../../assets/images/map.png');

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    containerHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
    },
    containerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    amount: {
        fontFamily: 'MontserratBold',
        fontSize: 32,
        color: colors.text_terciary,
        marginBottom: 8,
        marginTop: 34,
    },
    text: {
        fontFamily: 'MontserratRegular',
        fontSize: 12,
        color: colors.text_terciary,
    },
    desta: {
        fontFamily: 'MontserratBold',
        fontSize: 12,
        color: colors.text_terciary,
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 40,
        borderRadius: 4,
        alignItems: 'center',
        backgroundColor: colors.text_terciary,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16,
    },
    buttonText: {
        color: colors.white,
        marginRight: 16,
    },
    containerButtonIcon: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonIcon: {
        flexDirection: 'row',
        backgroundColor: colors.text_terciary,
        width: 4,
        height: 4,
        borderRadius: 50,
        marginRight: 6,
    },
    buttonIconPop: {
        flexDirection: 'row',
        backgroundColor: colors.text_terciary,
        width: 4,
        height: 4,
        borderRadius: 50,
    },
    containerMap: {
        marginTop: 32,
    },
    textDescriber: {
        fontFamily: 'MontserratRegular',
        fontSize: 14,
        color: colors.text_terciary,
        marginBottom: 16,
        marginLeft: 16,
    },
    textDescriberBold: {
        fontFamily: 'MontserratBold',
        fontSize: 14,
        color: colors.text_terciary,
        marginBottom: 16,
        marginRight: 16,
    },
    containerText: {
        backgroundColor: colors.white,
        borderRadius: 20,
        marginTop: 16,
        paddingTop: 16,
    },
    line: {
        backgroundColor: colors.text_terciary,
        height: 1,
        marginHorizontal: 16,
        marginBottom: 16,
    },
    containerTextIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 16,
        marginBottom: 16,
    },
    textDescriberBoldIcon: {
        fontFamily: 'MontserratBold',
        fontSize: 14,
        color: colors.text_terciary,
    },
    iconTextIcon: {
        marginRight: 6,
    },
    containerGoBack: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingTop: 16,
        paddingBottom: 24,
        backgroundColor: colors.white,
    },
    textGoBack: {
        fontFamily: 'MontserratBold',
        fontSize: 18,
        color: colors.text_terciary,
        marginLeft: 12,
    },
});

type WalletTransactionDetailProps = {
    navigation: any;
};

export default function WalletTransactionDetailScreen(props: WalletTransactionDetailProps) {
    const { navigation } = props;
    const {
        Title,
        Button,
        TextStatus,
        TextStatement,
        TextPaymentTo,
        TextPhone,
        TextMoneySent,
        TextCategory,
        TextNote,
        TextAddNote,
        TextGroceries,
        TextWalmart,
        TextCompleted,
        TextDownload,
    } = tokens.app.walletTransactionDetailScreen;

    return (
        <Screen>
            <ScrollView>
                <View>
                    <RectButton style={styles.containerGoBack} onPress={() => navigation.goBack()}>
                        <AntDesign name="arrowleft" size={24} color={colors.text_terciary} />
                        <Text style={styles.textGoBack}>{i18n.t(Title)}</Text>
                    </RectButton>
                </View>

                <View style={styles.container}>
                    <View>
                        <View style={styles.containerHeader}>
                            <View>
                                <Text style={styles.amount}>-$21,50</Text>
                                <Text style={styles.text}>
                                    To <Text style={styles.desta}>{i18n.t(TextWalmart)}</Text>
                                </Text>
                                <Text style={styles.text}>Yesterday, 5:56pm</Text>
                            </View>
                            <View style={styles.icon}>
                                <Image source={food} />
                            </View>
                        </View>

                        <View style={styles.containerHeader}>
                            <ButtonIonicons
                                title={i18n.t(Button)}
                                onPress={() => {}}
                                iconName="scan"
                                iconSize={24}
                                colorIcon={colors.icon}
                            />

                            <View style={styles.containerButtonIcon}>
                                <Text style={styles.buttonIcon} />
                                <Text style={styles.buttonIcon} />
                                <Text style={styles.buttonIconPop} />
                            </View>
                        </View>
                    </View>

                    <View style={styles.containerMap}>
                        <Image source={map} />
                    </View>

                    <View style={styles.containerText}>
                        <View style={styles.containerRow}>
                            <Text style={styles.textDescriber}>{i18n.t(TextStatus)}</Text>
                            <Text style={styles.textDescriberBold}>{i18n.t(TextCompleted)}</Text>
                        </View>
                        <View style={styles.containerRow}>
                            <Text style={styles.textDescriber}>{i18n.t(TextStatement)}</Text>
                            <Text style={styles.textDescriberBold}>{i18n.t(TextDownload)}</Text>
                        </View>

                        <View style={styles.line} />

                        <View style={styles.containerRow}>
                            <Text style={styles.textDescriber}>{i18n.t(TextPaymentTo)}</Text>
                            <Text style={styles.textDescriberBold}>{i18n.t(TextWalmart)}</Text>
                        </View>
                        <View style={styles.containerRow}>
                            <Text style={styles.textDescriber}>{i18n.t(TextPhone)}</Text>
                            <Text style={styles.textDescriberBold}>+01 354 25 356</Text>
                        </View>

                        <View style={styles.line} />

                        <View style={styles.containerRow}>
                            <Text style={styles.textDescriber}>{i18n.t(TextMoneySent)}</Text>
                            <Text style={styles.textDescriberBold}>$21.5</Text>
                        </View>
                        <View style={styles.containerRow}>
                            <Text style={styles.textDescriber}>{i18n.t(TextCategory)}</Text>
                            <Text style={styles.textDescriberBold}>{i18n.t(TextGroceries)}</Text>
                        </View>
                    </View>

                    <View style={styles.containerText}>
                        <View style={styles.containerRow}>
                            <Text style={styles.textDescriber}>{i18n.t(TextNote)}</Text>
                            <View style={styles.containerTextIcon}>
                                <SimpleLineIcons
                                    style={styles.iconTextIcon}
                                    name="pencil"
                                    size={10}
                                    color={colors.text_terciary}
                                />
                                <Text style={styles.textDescriberBoldIcon}>{i18n.t(TextAddNote)}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </Screen>
    );
}
