import * as React from 'react';
import { useContext, useState } from 'react';
import { StyleSheet, TextInput, View, ActivityIndicator } from 'react-native';

import { AuthContext } from '../../contexts/Auth';
import H4 from '../../components/Typography/H4';
import AppButton from '../../components/Button/ButtonPrimary';

import colors from '../../config/colors';

import i18n from '../../i18n';
import tokens from '../../i18n/tokens';

const { userI18n, passwordI18n, errorLogin } = tokens.app.loginScreen;
const { Login, Password } = tokens.app.commonTerms;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    formField: {
        width: '100%',
        marginTop: 12,
    },
    input: {
        fontFamily: 'MontserratRegular',
        fontSize: 16,
        backgroundColor: colors.white,
        color: colors.black,
        paddingHorizontal: 12,
        borderRadius: 4,
        width: '100%',
        height: 44,
        marginVertical: 5,
        borderWidth: 2,
        borderColor: colors.bg_four,
    },
    containerButtonContinue: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 40,
    },
});

type LoginProps = {
    navigation: any;
};

export default function LoginScreen(props: LoginProps) {
    const { navigation } = props;
    const nextPage = (screen: string) => {
        navigation.push(screen);
    };

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const { signIn, loading } = useContext(AuthContext);

    const login = async () => {
        setError(false);
        const userRequest = {
            username,
            password,
        };
        const response = await signIn(userRequest);
        if (response) {
            nextPage('ApplyNavigation');
        } else {
            setError(true);
        }
    };

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#666" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.formField}>
                <H4 title={i18n.t(userI18n)} />
                <TextInput
                    style={styles.input}
                    placeholder={i18n.t(Login)}
                    autoCapitalize="none"
                    onChangeText={(value: string) => setUsername(value)}
                />
            </View>
            <View style={styles.formField}>
                <H4 title={i18n.t(passwordI18n)} />
                <TextInput
                    style={styles.input}
                    placeholder={i18n.t(Password)}
                    autoCapitalize="none"
                    secureTextEntry
                    onChangeText={(value: string) => setPassword(value)}
                />
            </View>
            <View style={styles.containerButtonContinue}>
                <AppButton title={i18n.t(Login)} onPress={login} />
                {error && (
                    <View>
                        <H4 title={i18n.t(errorLogin)} />
                    </View>
                )}
            </View>
        </View>
    );
}
