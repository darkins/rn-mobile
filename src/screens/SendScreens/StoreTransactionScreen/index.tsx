import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Divider } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import Screen from '../../../components/Screen';
import ButtonPrimary from '../../../components/Button/ButtonPrimary';
import i18n from '../../../i18n';
import tokens from '../../../i18n/tokens';
import colors from '../../../config/colors';

const bread = require('../../../../assets/images/bread.png');
const map = require('../../../../assets/images/walmart-map.png');

const { SendReceipt } = tokens.app.storeTransaction;
const {
    Status,
    Completed,
    Note,
    AddNote,
    Category,
    Download,
    Groceries,
    MoneySent,
    PaymentTo,
    Phone,
    Statement,
    Walmart,
} = tokens.app.commonTerms;

const styles = StyleSheet.create({
    pageContainer: {
        paddingHorizontal: 20,
        paddingBottom: 60,
    },
    col2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    icon: {
        width: 26,
        height: 26,
    },
    ellipsis: {
        fontSize: 24,
        fontFamily: 'MontserratBold',
    },
    amount: {
        fontSize: 24,
        fontFamily: 'MontserratBold',
        color: colors.text_secondary,
    },
    map: {
        maxWidth: '100%',
        marginVertical: 20,
    },
    listContainer: {
        backgroundColor: colors.white,
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
    },
});

export default function StoreTrasactionScreen() {
    return (
        <Screen>
            <ScrollView>
                <View style={styles.pageContainer}>
                    <View style={styles.col2}>
                        <View>
                            <Text style={styles.amount}>- $21.50</Text>
                            <Text>To {i18n.t(Walmart)}</Text>
                            <Text>Yesterday, 5:56pm</Text>
                        </View>
                        <Image style={styles.icon} source={bread} />
                    </View>
                    <View style={styles.col2}>
                        <ButtonPrimary title={i18n.t(SendReceipt)} onPress={null} />
                        <Text style={styles.ellipsis}>...</Text>
                    </View>
                    <Image style={styles.map} source={map} />
                    <View style={styles.listContainer}>
                        <View style={styles.col2}>
                            <Text>{i18n.t(Status)}</Text>
                            <Text>{i18n.t(Completed)}</Text>
                        </View>
                        <View style={styles.col2}>
                            <Text>{i18n.t(Statement)}</Text>
                            <Text>{i18n.t(Download)}</Text>
                        </View>
                        <Divider />
                        <View style={styles.col2}>
                            <Text>{i18n.t(PaymentTo)}</Text>
                            <Text>{i18n.t(Walmart)}</Text>
                        </View>
                        <View style={styles.col2}>
                            <Text>{i18n.t(Phone)}</Text>
                            <Text>+01 354 25 356</Text>
                        </View>
                        <Divider />
                        <View style={styles.col2}>
                            <Text>{i18n.t(MoneySent)}</Text>
                            <Text>$21.5</Text>
                        </View>
                        <View style={styles.col2}>
                            <Text>{i18n.t(Category)}</Text>
                            <Text>{i18n.t(Groceries)}</Text>
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.col2}>
                            <Text>{i18n.t(Note)}</Text>
                            <Text>{i18n.t(AddNote)}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </Screen>
    );
}
