import React, { useContext } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Screen from '../../../components/Screen';
import H1 from '../../../components/Typography/H1';
import ButtonPrimary from '../../../components/Button/ButtonPrimary';
import i18n from '../../../i18n';
import tokens from '../../../i18n/tokens';
import { UserContext } from '../../../contexts/User';
import colors from '../../../config/colors';

const { Title, Describe, Done } = tokens.app.registrationEndScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    spacing: {
        marginVertical: 30,
    },
    subText: {
        fontFamily: 'MontserratRegular',
        fontSize: 14,
        lineHeight: 20,
        textAlign: 'center',
    },
    containerButtonDone: {
        alignItems: 'center',
        marginVertical: 30,
    },
});

type RegistrationEndProps = {
    navigation: any;
};

export default function RegistrationEndScreen(props: RegistrationEndProps) {
    const { navigation } = props;
    const { completeRegistration } = useContext(UserContext);

    const nextPage = (screen: string) => {
        completeRegistration();
        navigation.push(screen);
    };

    return (
        <Screen>
            <View style={styles.container}>
                <Ionicons name="md-checkmark-circle-outline" size={128} color={colors.success} />
                <View style={styles.spacing}>
                    <H1 title={i18n.t(Title)} />
                    <Text style={styles.subText}>{i18n.t(Describe)}</Text>
                </View>
                <View style={styles.containerButtonDone}>
                    <ButtonPrimary title={i18n.t(Done)} onPress={() => nextPage('LoginScreens')} />
                </View>
            </View>
        </Screen>
    );
}
