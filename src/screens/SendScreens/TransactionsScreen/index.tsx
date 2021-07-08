import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Screen from '../../../components/Screen';
import H4 from '../../../components/Typography/H4';
import colors from '../../../config/colors';

const svdp = require('../../../../assets/images/svdp26x26.png');
const bread = require('../../../../assets/images/bread.png');

const styles = StyleSheet.create({
    flexRow: {
        flexDirection: 'row',
    },
    flatListContainer: {
        backgroundColor: colors.white,
        borderRadius: 10,
    },
    flatListContainerBody: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 20,
        padding: 16,
    },
    flatListContainerItem: {
        marginHorizontal: 10,
    },
    logo: {
        width: 26,
        height: 26,
    },
    textName: {
        alignContent: 'flex-start',
        fontFamily: 'MontserratBold',
        fontSize: 14,
        color: colors.text_terciary,
    },
    textNumber: {
        fontFamily: 'MontserratRegular',
        fontSize: 12,
        color: colors.text_primary,
    },
    textAmount: {
        flexDirection: 'row',
        fontFamily: 'MontserratBold',
        fontSize: 14,
        color: colors.text_terciary,
    },
    pageContainer: {
        paddingHorizontal: 20,
        paddingBottom: 60,
    },
});

const may = [
    {
        id: 1,
        icon: svdp,
        name: 'Saint Vincent de Paul',
        data: '15 May 2021, 20:15',
        amount: '+ $200',
    },
    {
        id: 2,
        icon: bread,
        name: 'Wallmart',
        data: '15 May 2021, 20:15',
        amount: '- $21.5',
    },
    {
        id: 3,
        icon: svdp,
        name: 'To Gabriela Brown',
        data: '11 May 2021, 11:05',
        amount: '- $1,000',
    },
    {
        id: 4,
        icon: svdp,
        name: 'Saint Vincent de Paul',
        data: '30 April 2021, 20:15',
        amount: '- $1,000',
    },
];

const april = [
    {
        id: 1,
        icon: bread,
        name: 'Wallmart',
        data: '2 April 2021, 14:32',
        amount: '- $200',
    },
    {
        id: 2,
        icon: svdp,
        name: 'Saint Vincent de Paul',
        data: '30 April 2021, 20:15',
        amount: '+ $1,000',
    },
    {
        id: 3,
        icon: bread,
        name: 'Wallmart',
        data: '2 April 2021, 14:32',
        amount: '- $200',
    },
    {
        id: 4,
        icon: svdp,
        name: 'Saint Vincent de Paul',
        data: '30 April 2021, 20:15',
        amount: '+ $1,000',
    },
];

const FlatListItemSeparator = () => (
    <View
        style={{
            flexDirection: 'column',
            height: 1,
            marginHorizontal: 20,
            marginVertical: 5,
            backgroundColor: colors.border,
        }}
    />
);

export default function index() {
    return (
        <Screen>
            <ScrollView>
                <View style={styles.pageContainer}>
                    <H4 title="May 21" />
                    <FlatList
                        ItemSeparatorComponent={FlatListItemSeparator}
                        style={styles.flatListContainer}
                        data={may}
                        keyExtractor={(item: any) => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.flatListContainerBody}>
                                <View style={styles.flexRow}>
                                    <Image style={styles.logo} source={item.icon} />
                                    <View style={styles.flatListContainerItem}>
                                        <Text style={styles.textName}> {item.name} </Text>
                                        <Text style={styles.textNumber}> {item.data} </Text>
                                    </View>
                                </View>
                                <Text style={styles.textAmount}> {item.amount} </Text>
                            </View>
                        )}
                    />
                    <H4 title="April 21" />
                    <FlatList
                        ItemSeparatorComponent={FlatListItemSeparator}
                        style={styles.flatListContainer}
                        data={april}
                        keyExtractor={(item: any) => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.flatListContainerBody}>
                                <View style={styles.flexRow}>
                                    <Image style={styles.logo} source={item.icon} />
                                    <View style={styles.flatListContainerItem}>
                                        <Text style={styles.textName}> {item.name} </Text>
                                        <Text style={styles.textNumber}> {item.data} </Text>
                                    </View>
                                </View>
                                <Text style={styles.textAmount}> {item.amount} </Text>
                            </View>
                        )}
                    />
                </View>
            </ScrollView>
        </Screen>
    );
}
