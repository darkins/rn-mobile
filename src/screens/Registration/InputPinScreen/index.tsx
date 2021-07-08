import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import Screen from '../../../components/Screen';
import H1 from '../../../components/Typography/H1';
import ButtonPrimary from '../../../components/Button/ButtonPrimary';
import BackLink from '../../../components/BackLink';
import i18n from '../../../i18n';
import tokens from '../../../i18n/tokens';
import colors from '../../../config/colors';
import H4 from '../../../components/Typography/H4';

const { Title, DigitCode, Footer } = tokens.app.inputPinScreen;
const { Continue, Previous } = tokens.app.commonTerms;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    flexRow: {
        flexDirection: 'row',
        marginVertical: 50,
    },
    containerButtonContinue: {
        flexDirection: 'column',
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

type PINScreenProps = {
    navigation: any;
};

export default function InputPinScreen(props: PINScreenProps) {
    const { navigation } = props;

    const nextPage = (screen: string) => {
        navigation.push(screen);
    };

    const CELL_COUNT = 6;

    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    return (
        <Screen>
            <View style={styles.container}>
                <H4 title={i18n.t(Title)} />
                <H1 title={i18n.t(DigitCode)} />
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
                    <ButtonPrimary title={i18n.t(Continue)} onPress={() => nextPage('CreatePin')} />
                    <BackLink title={i18n.t(Previous)} onPress={() => navigation.goBack()} />
                </View>
                <H4 title={i18n.t(Footer)} />
            </View>
        </Screen>
    );
}
