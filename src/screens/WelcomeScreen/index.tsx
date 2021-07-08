import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import ButtonPrimary from '../../components/Button/ButtonPrimary';
import ButtonSecondary from '../../components/Button/ButtonSecondary';

import colors from '../../config/colors';

import i18n from '../../i18n';
import tokens from '../../i18n/tokens';

const logo = require('../../../assets/images/te-logo.png');

const { Introduction, Body, Login, Register, Espanol } = tokens.app.welcome;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        alignItems: 'center',
    },
    teLogo: {
        width: 148,
        height: 93,
        marginTop: 10,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        margin: 20,
    },
    textHelp: {
        fontSize: 34,
        lineHeight: 34,
        color: colors.text_primary,
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 20,
        paddingHorizontal: 20,
    },
    video: {
        padding: 20,
        marginTop: 20,
        alignItems: 'center',
    },
    videoText: {
        color: colors.text_primary,
        fontSize: 14,
        textAlign: 'center',
    },
    containerButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 40,
    },
    containerButtonSpanish: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
        height: 50,
        width: '100%',
        padding: 10,
    },
    textButtonSpanish: {
        fontSize: 12,
        fontFamily: 'MontserratBold',
        color: colors.cta_primary,
    },
    appName: {
        textTransform: 'uppercase',
        color: colors.black,
        opacity: 1,
        fontFamily: 'MontserratBold',
        fontSize: 12,
        letterSpacing: 1,
        textAlign: 'center',
    },
    appBg: {
        backgroundColor: colors.bg_one,
        opacity: 0.5,
        width: 210,
        marginTop: 10,
    },
    wrapper: {
        flex: 1,
    },
});

type RootScreenProps = {
    navigation: any;
};

export default function WelcomeScreen(props: RootScreenProps) {
    const { navigation } = props;

    const nextPage = (screen: string) => {
        navigation.push(screen);
    };

    const { wrapper, container, containerButtonSpanish, textHelp, teLogo, textButtonSpanish, video, videoText } =
        styles;

    return (
        <View style={wrapper}>
            <SafeAreaView style={container}>
                <Image source={logo} style={teLogo} />
                <Text style={textHelp}>{i18n.t(Introduction)}</Text>
                <View style={video}>
                    <Text style={videoText}>{i18n.t(Body)}</Text>
                    <Ionicons name="md-play-circle" size={64} color={colors.cta_primary} />
                </View>
                <View style={styles.containerButton}>
                    <ButtonPrimary title={i18n.t(Login)} onPress={() => nextPage('LoginScreens')} />
                    <ButtonSecondary title={i18n.t(Register)} onPress={() => nextPage('PhoneRegister')} />
                </View>
            </SafeAreaView>
            <View style={containerButtonSpanish}>
                <Text style={textButtonSpanish}>{i18n.t(Espanol)}</Text>
            </View>
        </View>
    );
}
