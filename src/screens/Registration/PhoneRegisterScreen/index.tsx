import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';
// We have to supress this one until we can create a types definition
// @ts-ignore
import PhoneInput from 'react-phone-number-input/react-native-input/index.js';
import Screen from '../../../components/Screen';
import H1 from '../../../components/Typography/H1';
import H4 from '../../../components/Typography/H4';
import BackLink from '../../../components/BackLink';
import countryCode from '../../../commons/countryCode.json';
import ButtonPrimary from '../../../components/Button/ButtonPrimary';
import colors from '../../../config/colors';
import { UserContext } from '../../../contexts/User';

import tokens from '../../../i18n/tokens';
import i18n from '../../../i18n';

const { Please, Country, Phone } = tokens.app.phoneRegister;
const { Previous, Continue } = tokens.app.commonTerms;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    flexRow: {
        flexDirection: 'row',
        marginVertical: 50,
    },
    code: {
        marginRight: 10,
    },
    number: {
        marginLeft: 10,
    },
    textInputPhone: {
        fontFamily: 'MontserratBold',
        fontSize: 16,
        lineHeight: 24,
        paddingHorizontal: 10,
        paddingVertical: 8,
        width: 200,
        borderWidth: 1,
        borderColor: colors.bg_four,
        borderRadius: 4,
        backgroundColor: colors.white,
        color: colors.text_terciary,
    },
    focusCell: {
        borderColor: colors.cta_primary,
    },
    containerButtonContinue: {
        alignItems: 'center',
    },
});

const customPickerStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        lineHeight: 24,
        paddingHorizontal: 10,
        paddingVertical: 8,
        paddingRight: 50,
        borderWidth: 1,
        borderColor: colors.bg_four,
        borderRadius: 4,
        backgroundColor: colors.white,
        color: colors.text_primary,
    },
    inputAndroid: {
        fontSize: 16,
        lineHeight: 24,
        paddingHorizontal: 10,
        paddingVertical: 8,
        paddingRight: 50,
        borderWidth: 1,
        borderColor: colors.bg_four,
        borderRadius: 4,
        backgroundColor: colors.white,
        color: colors.text_primary,
    },
});

type PhoneRegisterScreenProps = {
    navigation: any;
};

export default function PhoneRegisterScreen(props: PhoneRegisterScreenProps) {
    const { navigation } = props;

    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const { setUserStepData } = useContext(UserContext);

    const nextPage = async (screen: string) => {
        const userRequest = {
            country,
            phone,
        };
        await setUserStepData(userRequest);
        navigation.push(screen);
    };

    const placeholder = {
        label: '+01',
        value: null,
    };

    return (
        <Screen>
            <View style={styles.container}>
                <H1 title={i18n.t(Please)} />
                <View style={styles.flexRow}>
                    <View style={styles.code}>
                        <H4 title={i18n.t(Country)} />
                        <RNPickerSelect
                            placeholder={placeholder}
                            style={{
                                ...customPickerStyles,
                                iconContainer: {
                                    top: 10,
                                    right: 12,
                                },
                            }}
                            useNativeAndroidPickerStyle={false}
                            onValueChange={(value: string) => setCountry(value)}
                            items={countryCode}
                            Icon={() => <Ionicons name="md-chevron-down" size={24} color="gray" />}
                        />
                    </View>
                    <View style={styles.number}>
                        <H4 title={i18n.t(Phone)} />
                        <View style={styles.textInputPhone}>
                            <PhoneInput
                                placeholder="Enter phone number"
                                defaultCountry={country}
                                value={phone}
                                onChange={setPhone}
                                style={styles.textInputPhone}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.containerButtonContinue}>
                    <ButtonPrimary title={i18n.t(Continue)} onPress={() => nextPage('PIN')} />
                    <BackLink title={i18n.t(Previous)} onPress={() => navigation.goBack()} />
                </View>
            </View>
        </Screen>
    );
}
