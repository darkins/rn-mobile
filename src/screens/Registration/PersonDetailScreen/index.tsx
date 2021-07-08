import React, { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import H1 from '../../../components/Typography/H1';
import H4 from '../../../components/Typography/H4';
import Screen from '../../../components/Screen';
import ButtonPrimary from '../../../components/Button/ButtonPrimary';
import BackLink from '../../../components/BackLink';
import i18n from '../../../i18n';
import tokens from '../../../i18n/tokens';
import InputText from '../../../components/InputText';
import { UserContext } from '../../../contexts/User';

const { Title, Describer, FirstName, LastName, SocialNumber, Birth, Fema } = tokens.app.personDetailScreen;
const { Continue, Previous } = tokens.app.commonTerms;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 60,
        alignItems: 'center',
    },
    spacing: {
        marginTop: 10,
        marginBottom: 20,
    },
    formField: {
        width: '100%',
        marginVertical: 12,
    },
    containerButtonContinue: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 40,
    },
});

type PersonScreenProps = {
    navigation: any;
};

export default function PersonDetailScreen(props: PersonScreenProps) {
    const { navigation } = props;
    const { setUserStepData } = useContext(UserContext);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [numberSecuritySocial, setNumberSecuritySocial] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [femaNumber, setFemaNumber] = useState('');

    const nextPage = async (screen: string) => {
        const userRequest = {
            firstName,
            lastName,
            numberSecuritySocial,
            dateOfBirth,
            femaNumber,
        };
        await setUserStepData(userRequest);
        navigation.push(screen);
    };

    return (
        <Screen>
            <ScrollView>
                <View style={styles.container}>
                    <H1 title={i18n.t(Title)} />
                    <View style={styles.spacing}>
                        <H4 title={i18n.t(Describer)} />
                    </View>
                    <View style={styles.formField}>
                        <H4 title={i18n.t(FirstName)} />
                        <InputText key="firstName" onChangeText={setFirstName} />
                    </View>
                    <View style={styles.formField}>
                        <H4 title={i18n.t(LastName)} />
                        <InputText key="lastName" onChangeText={setLastName} />
                    </View>
                    <View style={styles.formField}>
                        <H4 title={i18n.t(SocialNumber)} />
                        <InputText key="socialNumber" onChangeText={setNumberSecuritySocial} />
                    </View>
                    <View style={styles.formField}>
                        <H4 title={i18n.t(Birth)} />
                        <InputText key="setBirth" onChangeText={setDateOfBirth} />
                    </View>
                    <View style={styles.formField}>
                        <H4 title={i18n.t(Fema)} />
                        <InputText key="Fema" onChangeText={setFemaNumber} />
                    </View>
                    <View style={styles.containerButtonContinue}>
                        <ButtonPrimary title={i18n.t(Continue)} onPress={() => nextPage('VerifyAddressScreen')} />
                        <BackLink title={i18n.t(Previous)} onPress={() => navigation.goBack()} />
                    </View>
                </View>
            </ScrollView>
        </Screen>
    );
}
