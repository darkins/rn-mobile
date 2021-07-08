import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { ScrollView, RectButton, TextInput } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { Avatar, Divider } from 'react-native-paper';
import Screen from '../../../components/Screen';
import i18n from '../../../i18n';
import tokens from '../../../i18n/tokens';
import colors from '../../../config/colors';

const { Charity1, Contacts, Add } = tokens.app.commonTerms;

const styles = StyleSheet.create({
    headContainer: {
        backgroundColor: colors.white,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    spaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 70,
    },
    heading: {
        fontSize: 18,
        fontFamily: 'MontserratBold',
        color: colors.text_terciary,
        marginLeft: 10,
    },
    flexRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    flexSb: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginBottom: 10,
    },
    smallHead: {
        fontFamily: 'MontserratBold',
        fontSize: 10,
        textTransform: 'uppercase',
        color: colors.text_terciary,
    },
    addLink: {
        fontFamily: 'MontserratBold',
        fontSize: 10,
        textTransform: 'uppercase',
        color: colors.text_secondary,
    },
    flatListContainer: {
        backgroundColor: colors.white,
        marginHorizontal: 20,
        borderRadius: 20,
    },
    flatListContainerBody: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        borderRadius: 20,
        padding: 16,
    },
    flatListContainerItem: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginHorizontal: 10,
    },
    textDescribe: {
        fontFamily: 'MontserratBold',
        fontSize: 14,
        color: colors.text_terciary,
    },
    textNumber: {
        fontFamily: 'MontserratRegular',
        fontSize: 12,
        color: colors.text_primary,
    },
    chevron: {
        fontSize: 24,
        color: colors.text_primary,
    },
    icon: {
        fontSize: 24,
        color: colors.text_primary,
    },
    textInput: {
        height: 40,
        borderRadius: 10,
        backgroundColor: colors.bg_one,
        borderColor: colors.bg_one,
        borderWidth: 1,
        paddingHorizontal: 20,
        marginBottom: 10,
    },
});

const transactions = [
    {
        id: 1,
        avatar: 'avatar',
        describe: 'Grocery Store',
        data: '+00 736 846 12',
    },
    {
        id: 2,
        avatar: 'avatar',
        describe: 'Grocery Store',
        data: '+00 736 846 12',
    },
    {
        id: 3,
        avatar: 'avatar',
        describe: 'Grocery Store',
        data: '+00 736 846 12',
    },
    {
        id: 4,
        avatar: 'avatar',
        describe: 'Grocery Store',
        data: '+00 736 846 12',
    },
    {
        id: 5,
        avatar: 'avatar',
        describe: 'Grocery Store',
        data: '+00 736 846 12',
    },
    {
        id: 6,
        avatar: 'avatar',
        describe: 'Grocery Store',
        data: '+00 736 846 12',
    },
    {
        id: 7,
        avatar: 'avatar',
        describe: 'Grocery Store',
        data: '+00 736 846 12',
    },
    {
        id: 8,
        avatar: 'avatar',
        describe: 'Grocery Store',
        data: '+00 736 846 12',
    },
    {
        id: 9,
        avatar: 'avatar',
        describe: 'Grocery Store',
        data: '+00 736 846 12',
    },
    {
        id: 10,
        avatar: 'avatar',
        describe: 'Grocery Store',
        data: '+00 736 846 12',
    },
];

const FlatListItemSeparator = () => (
    <View
        style={{
            flexDirection: 'column',
            height: 1,
            width: '98%',
            marginHorizontal: 'auto',
            backgroundColor: colors.border,
        }}
    />
);

type SendPaymentProps = {
    navigation: any;
};

export default function SendPaymentScreen(props: SendPaymentProps) {
    const { navigation } = props;

    const nextPage = (screen: string) => {
        navigation.push(screen);
    };

    return (
        <Screen>
            <ScrollView>
                <View style={styles.headContainer}>
                    <View style={styles.spaceBetween}>
                        <View style={styles.flexRow}>
                            <Ionicons
                                name="md-chevron-back-outline"
                                style={styles.chevron}
                                onPress={() => navigation.goBack()}
                            />
                            <Text style={styles.heading}>{i18n.t(Charity1)}</Text>
                        </View>
                        <Ionicons
                            name="md-scan-outline"
                            style={styles.icon}
                            onPress={() => nextPage('ScanqrCodeScreen')}
                        />
                    </View>
                    <TextInput style={styles.textInput} placeholder="Search" />
                </View>
                <View style={styles.flexSb}>
                    <Text style={styles.smallHead}>{i18n.t(Contacts)}</Text>
                    <Text style={styles.addLink}>{i18n.t(Add)}</Text>
                </View>
                <FlatList
                    ItemSeparatorComponent={FlatListItemSeparator}
                    style={styles.flatListContainer}
                    data={transactions}
                    keyExtractor={(item: any) => item.id}
                    renderItem={({ item }) => (
                        <RectButton
                            style={styles.flatListContainerBody}
                            onPress={() => navigation.StorePaymentScreen()}
                        >
                            <Avatar.Text size={32} label="GS" color={colors.white}>
                                {item.avatar}
                            </Avatar.Text>
                            <View style={styles.flatListContainerItem}>
                                <Text style={styles.textDescribe}> {item.describe} </Text>
                                <Text style={styles.textNumber}> {item.data} </Text>
                            </View>
                            <Divider />
                        </RectButton>
                    )}
                />
            </ScrollView>
        </Screen>
    );
}
