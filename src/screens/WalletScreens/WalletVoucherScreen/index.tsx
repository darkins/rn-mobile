import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import colors from '../../../config/colors';
import Screen from '../../../components/Screen';
import H4 from '../../../components/Typography/H4';
import i18n from '../../../i18n';
import tokens from '../../../i18n/tokens';

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginVertical: 40,
    },
    ContainerButtonHouse: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonHouse: {
        flexDirection: 'row',
        height: 65,
        borderRadius: 20,
        backgroundColor: colors.cta_primary,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        padding: 16,
    },
    buttonTextHouse: {
        fontFamily: 'MontserratBold',
        fontSize: 14,
        color: colors.white,
        marginLeft: 16,
    },
    buttonVoucher: {
        flexDirection: 'row',
        height: 65,
        borderRadius: 20,
        backgroundColor: colors.cta_secondary,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        padding: 16,
    },
    buttonTextVoucher: {
        fontFamily: 'MontserratBold',
        fontSize: 14,
        color: colors.white,
        marginLeft: 16,
    },
});

const { AvailableVouchers, House, Vouchers } = tokens.app.commonTerms;

const house = require('../../../../assets/images/House.png');
const food = require('../../../../assets/images/food.png');

type WalletVoucherProps = {
    navigation: any;
};

export default function WalletVoucherScreen(props: WalletVoucherProps) {
    const { navigation } = props;

    const nextPage = (screen: string) => {
        navigation.push(screen);
    };

    return (
        <Screen>
            <View style={styles.container}>
                <H4 title={i18n.t(AvailableVouchers)} />
                <TouchableOpacity style={styles.buttonHouse} onPress={() => nextPage('SupportApplicationScreen')}>
                    <View style={styles.ContainerButtonHouse}>
                        <Image source={house} />
                        <Text style={styles.buttonTextHouse}>{i18n.t(House)}</Text>
                    </View>
                    <AntDesign name="right" size={12} color={colors.cta_secondary} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonVoucher}>
                    <View style={styles.ContainerButtonHouse}>
                        <Image source={food} />
                        <Text style={styles.buttonTextVoucher}>{i18n.t(Vouchers)}</Text>
                    </View>
                    <AntDesign name="right" size={12} color={colors.cta_secondary} />
                </TouchableOpacity>
            </View>
        </Screen>
    );
}
