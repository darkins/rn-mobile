import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import Screen from '../../../components/Screen';
import H1 from '../../../components/Typography/H1';
import ButtonPrimary from '../../../components/Button/ButtonPrimary';
import BackLink from '../../../components/BackLink';
import colors from '../../../config/colors';
import i18n from '../../../i18n';
import tokens from '../../../i18n/tokens';
import { UserContext } from '../../../contexts/User';

const { Title } = tokens.app.createPinScreen;
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
    containerButtonContinue: {
        alignItems: 'center',
    },
});

const pinStyles = StyleSheet.create({
    codeFieldRoot: {
        marginHorizontal: 20,
        justifyContent: 'space-around',
    },
    cell: {
        width: 44,
        height: 60,
        lineHeight: 55,
        textAlign: 'center',
        fontFamily: 'MontserratBold',
        fontSize: 16,
        backgroundColor: colors.white,
        borderColor: colors.bg_four,
        borderWidth: 2,
        borderRadius: 4,
        color: colors.cta_primary,
        marginHorizontal: 5,
    },
    focusCell: {
        borderColor: colors.cta_primary,
    },
});

type CreatePinProps = {
    navigation: any;
};

export default function CreatePinScreen(props: CreatePinProps) {
    const { navigation } = props;
    const { setUserStepData } = useContext(UserContext);

    const CELL_COUNT = 4;

    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const nextPage = async (screen: string) => {
        const userRequest = {
            pinCode: value,
        };
        await setUserStepData(userRequest);
        navigation.push(screen);
    };

    return (
        <Screen>
            <View style={styles.container}>
                <H1 title={i18n.t(Title)} />
                <View style={styles.flexRow}>
                    <CodeField
                        ref={ref}
                        value={value}
                        onChangeText={setValue}
                        cellCount={CELL_COUNT}
                        rootStyle={pinStyles.codeFieldRoot}
                        keyboardType="number-pad"
                        textContentType="oneTimeCode"
                        renderCell={({ index, symbol, isFocused }) => (
                            <Text
                                key={index}
                                style={[pinStyles.cell, isFocused && pinStyles.focusCell]}
                                onLayout={getCellOnLayoutHandler(index)}
                            >
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                        )}
                    />
                </View>
                <View style={styles.containerButtonContinue}>
                    <ButtonPrimary title={i18n.t(Continue)} onPress={() => nextPage('PersonDetailScreen')} />
                    <BackLink title={i18n.t(Previous)} onPress={() => navigation.goBack()} />
                </View>
            </View>
        </Screen>
    );
}
