import React, { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Screen from '../../../components/Screen';
import H1 from '../../../components/Typography/H1';
import H4 from '../../../components/Typography/H4';
import InputText from '../../../components/InputText';
import ButtonPrimary from '../../../components/Button/ButtonPrimary';
import BackLink from '../../../components/BackLink';
import i18n from '../../../i18n';
import tokens from '../../../i18n/tokens';
import { UserContext } from '../../../contexts/User';

const { Title, State, City, Street, PostalCode } = tokens.app.verifyAddressScreen;
const { Previous, Continue } = tokens.app.commonTerms;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 60,
        alignItems: 'center',
    },
    formField: {
        width: '100%',
        marginVertical: 12,
    },
    containerButtonContinue: {
        alignItems: 'center',
        marginVertical: 30,
    },
});

type VerifyAddressProps = {
    navigation: any;
};

export default function VerifyAddressScreen(props: VerifyAddressProps) {
    const { navigation } = props;
    const { setUserStepData } = useContext(UserContext);

    const [state, useStateYou] = useState('');
    const [city, useCity] = useState('');
    const [street, useStreet] = useState('');
    const [postalCode, usePostalCode] = useState('');

    const nextPage = async (screen: string) => {
        const userRequest = {
            state,
            city,
            street,
            postalCode,
        };
        await setUserStepData(userRequest);
        navigation.push(screen);
    };

    return (
        <Screen>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.formField}>
                        <H1 title={i18n.t(Title)} />
                    </View>
                    <View style={styles.formField}>
                        <H4 title={i18n.t(State)} />
                        <InputText key="state" onChangeText={useStateYou} />
                    </View>
                    <View style={styles.formField}>
                        <H4 title={i18n.t(City)} />
                        <InputText key="city" onChangeText={useCity} />
                    </View>
                    <View style={styles.formField}>
                        <H4 title={i18n.t(Street)} />
                        <InputText key="street" onChangeText={useStreet} />
                    </View>
                    <View style={styles.formField}>
                        <H4 title={i18n.t(PostalCode)} />
                        <InputText key="postalCode" onChangeText={usePostalCode} />
                    </View>
                    <View style={styles.containerButtonContinue}>
                        <ButtonPrimary title={i18n.t(Continue)} onPress={() => nextPage('VerifyEmailAddressScreen')} />
                        <BackLink title={i18n.t(Previous)} onPress={() => navigation.goBack()} />
                    </View>
                </View>
            </ScrollView>
        </Screen>
    );
}
