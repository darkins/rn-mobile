import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Ionicons } from '@expo/vector-icons';
import Screen from '../../../components/Screen';

import i18n from '../../../i18n';
import tokens from '../../../i18n/tokens';
import colors from '../../../config/colors';

const styles = StyleSheet.create({
    containerTitle: {
        paddingVertical: 45,
        backgroundColor: colors.black,
    },
    title: {
        color: colors.white,
        fontSize: 24,
        textAlign: 'center',
    },
    containerBarQrCode: {
        flex: 1,
        backgroundColor: colors.black,
    },
    containerFooter: {
        padding: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: colors.black,
    },
});

const { Permission, NoAccess, PleaseScan, Tap } = tokens.app.scanCodeScreen;
interface UserData {
    status: any;
}

type ScanQrCodeProps = {
    navigation: any;
};

export default function ScanQRCodeScreen(props: ScanQrCodeProps) {
    const { navigation } = props;

    const nextPage = (screen: string) => {
        navigation.push(screen);
    };

    const [hasPermission, setHasPermission] = useState<UserData | any>(null);
    const [scanned, setScanned] = useState(false);
    const [typeCamera, setTypeCamera] = useState<string | any>('back');

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = () => {
        setScanned(true);
        nextPage('StorePaymentScreen');
    };

    if (hasPermission === null) {
        return <Text>{i18n.t(Permission)}</Text>;
    }
    if (hasPermission === false) {
        return <Text>{i18n.t(NoAccess)}</Text>;
    }

    return (
        <Screen>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>{i18n.t(PleaseScan)}</Text>
            </View>
            <View style={styles.containerBarQrCode}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                    barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
                    type={typeCamera}
                />
                {scanned && <Button title={i18n.t(Tap)} onPress={() => setScanned(false)} />}
            </View>
            <View style={styles.containerFooter}>
                <Ionicons onPress={() => nextPage('StorePaymentScreen')} name="md-camera" size={24} color="black" />
                <Ionicons onPress={() => nextPage('StorePaymentScreen')} name="md-camera" size={24} color="white" />
                <Ionicons
                    onPress={() => (typeCamera === 'front' ? setTypeCamera('back') : setTypeCamera('front'))}
                    name="ios-camera-reverse-outline"
                    size={24}
                    color="white"
                />
            </View>
        </Screen>
    );
}
