import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';
import Screen from '../../../components/Screen';
import H1 from '../../../components/Typography/H1';
import H4 from '../../../components/Typography/H4';
import AppHeader from '../../../components/AppHeader';
import ButtonPrimary from '../../../components/Button/ButtonPrimary';
import CheckBox from '../../../components/CheckBox';

import colors from '../../../config/colors';
import i18n from '../../../i18n';
import tokens from '../../../i18n/tokens';
import InputText from '../../../components/InputText';

const styles = StyleSheet.create({
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    pageContainer: {
        padding: 20,
    },
    topContainer: {
        marginVertical: 20,
    },
    questionContainer: {
        marginBottom: 20,
    },
    input: {
        backgroundColor: colors.white,
        borderWidth: 2,
        borderColor: colors.bg_four,
        borderRadius: 4,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 40,
    },
});

const customPickerStyles = StyleSheet.create({
    inputIOS: {
        height: 44,
        fontFamily: 'MontserratBold',
        fontSize: 14,
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderColor: colors.cta_secondary,
        borderRadius: 8,
        color: colors.cta_secondary,
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        height: 44,
        fontFamily: 'MontserratBold',
        fontSize: 14,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: colors.cta_secondary,
        borderRadius: 8,
        color: colors.cta_secondary,
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});

const { Household, Humans, Pets, Income, Any, Disabilities, Veteran, Language } = tokens.app.household;
const { Next } = tokens.app.commonTerms;

type HouseholdProps = {
    navigation: any;
};

export default function HouseholdInformationScreen(props: HouseholdProps) {
    const { navigation } = props;

    const nextPage = (screen: string) => {
        navigation.push(screen);
    };
    const [, setIncome] = useState('');

    return (
        <Screen>
            <ScrollView>
                <RectButton onPress={() => navigation.goBack()}>
                    <AppHeader />
                </RectButton>
                <View style={styles.pageContainer}>
                    <H1 title={i18n.t(Household)} style={{ marginVertical: 20 }} />
                    <View style={styles.topContainer}>
                        <H4 title={i18n.t(Humans)} />
                        <InputText onChangeText={() => {}} />
                    </View>
                    <View style={styles.questionContainer}>
                        <H4 title={i18n.t(Pets)} />
                        <InputText onChangeText={() => {}} />
                    </View>
                    <View style={styles.questionContainer}>
                        <H4 title={i18n.t(Income)} />
                        <View style={styles.input}>
                            <RNPickerSelect
                                style={{ ...customPickerStyles }}
                                onValueChange={(income) => setIncome(income)}
                                items={[
                                    { label: '$0 - $25,000', value: 'income1' },
                                    { label: '$25,000 - $35,000', value: 'income2' },
                                ]}
                            />
                        </View>
                    </View>
                    <H4 title={i18n.t(Any)} />
                    <View style={styles.flexRow}>
                        <CheckBox label={i18n.t(Disabilities)} />
                    </View>
                    <View style={styles.flexRow}>
                        <CheckBox label={i18n.t(Veteran)} />
                    </View>
                    <View style={styles.flexRow}>
                        <CheckBox label={i18n.t(Language)} />
                    </View>
                    <View style={styles.btnContainer}>
                        <ButtonPrimary title={i18n.t(Next)} onPress={() => nextPage('RecoveryResourcesScreen')} />
                    </View>
                </View>
            </ScrollView>
        </Screen>
    );
}
