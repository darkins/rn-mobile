import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import Screen from '../../../components/Screen';
import H1 from '../../../components/Typography/H1';
import P1 from '../../../components/Typography/P1';
import AppHeader from '../../../components/AppHeader';
import ButtonPrimary from '../../../components/Button/ButtonPrimary';

import colors from '../../../config/colors';
import i18n from '../../../i18n';
import tokens from '../../../i18n/tokens';

const { Additional, Please } = tokens.app.additional;
const { Next } = tokens.app.commonTerms;

const styles = StyleSheet.create({
    pageHead: {
        fontSize: 32,
        fontFamily: 'MontserratBold',
        color: colors.text_terciary,
        marginBottom: 40,
    },
    pageContainer: {
        padding: 20,
    },
    textArea: {
        textAlignVertical: 'top',
        minHeight: 100,
        backgroundColor: colors.white,
        padding: 20,
        marginTop: 20,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 40,
    },
});

type AdditionalProps = {
    navigation: any;
};

export default function AdditionalDetailsScreen(props: AdditionalProps) {
    const { navigation } = props;

    const nextPage = (screen: string) => {
        navigation.push(screen);
    };
    return (
        <Screen>
            <ScrollView>
                <RectButton onPress={() => navigation.goBack()}>
                    <AppHeader />
                </RectButton>

                <View style={styles.pageContainer}>
                    <H1 title={i18n.t(Additional)} />
                    <P1>{i18n.t(Please)}</P1>
                    <TextInput editable multiline numberOfLines={5} style={styles.textArea} />
                    <View style={styles.btnContainer}>
                        <ButtonPrimary title={i18n.t(Next)} onPress={() => nextPage('RecordVideoScreen')} />
                    </View>
                </View>
            </ScrollView>
        </Screen>
    );
}
