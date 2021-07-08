import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Screen from '../../../components/Screen';
import H1 from '../../../components/Typography/H1';
import H4 from '../../../components/Typography/H4';
import ButtonPrimary from '../../../components/Button/ButtonPrimary';
import BackLink from '../../../components/BackLink';
import i18n from '../../../i18n';
import tokens from '../../../i18n/tokens';
import colors from '../../../config/colors';
import { UserContext } from '../../../contexts/User';

const { Title, Email, Erro, Confirm } = tokens.app.verifyEmailAddressScreen;
const { Previous, Continue } = tokens.app.commonTerms;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 60,
        alignItems: 'center',
    },
    errorEmail: {
        fontFamily: 'MontserratBold',
        fontSize: 14,
        lineHeight: 21,
        color: colors.warning,
        paddingLeft: 10,
    },
    formField: {
        width: '100%',
        margin: 12,
    },
    containerButtonContinue: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 40,
    },
    input: {
        fontFamily: 'MontserratRegular',
        fontSize: 16,
        lineHeight: 24,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: colors.bg_four,
        borderRadius: 4,
        backgroundColor: colors.white,
        color: colors.black,
    },
});

type VerifyEmailAddressProps = {
    navigation: any;
};

export default function VerifyEmailAddressScreen(props: VerifyEmailAddressProps) {
    const { navigation } = props;
    const { setUserStepData } = useContext(UserContext);

    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    let error = false;

    const nextPage = async (screen: string) => {
        const userRequest = {
            email,
        };
        await setUserStepData(userRequest);
        navigation.push(screen);
    };

    const functionValidate = () => {
        setErrorEmail('');
        const regexEmail = /\S+@\S+.\S+/;

        if (!regexEmail.test(String(email).toLowerCase())) {
            setErrorEmail(i18n.t(Erro));
            error = true;
        }
        return !error;
    };

    const continueFunction = () => {
        const emailValidate = functionValidate();
        if (emailValidate) nextPage('RegistrationEndScreen');
    };

    return (
        <Screen>
            <View style={styles.container}>
                <View style={styles.formField}>
                    <H1 title={i18n.t(Title)} />
                </View>
                <View style={styles.formField}>
                    <H4 title={i18n.t(Email)} />
                    <TextInput
                        style={styles.input}
                        onChangeText={(value) => {
                            setEmail(value);
                            setErrorEmail('');
                        }}
                        keyboardType="email-address"
                    />
                    {!error && <Text style={styles.errorEmail}>{errorEmail}</Text>}
                </View>
                <View style={styles.formField}>
                    <H4 title={i18n.t(Confirm)} />
                    <TextInput
                        style={styles.input}
                        onChangeText={(value) => {
                            setEmail(value);
                            setErrorEmail('');
                        }}
                        keyboardType="email-address"
                    />
                </View>
                <View style={styles.containerButtonContinue}>
                    <ButtonPrimary title={i18n.t(Continue)} onPress={() => continueFunction()} />
                    <BackLink title={i18n.t(Previous)} onPress={() => navigation.goBack()} />
                </View>
            </View>
        </Screen>
    );
}
