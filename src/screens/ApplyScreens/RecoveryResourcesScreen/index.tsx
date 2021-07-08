import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import RadioButton from 'expo-radio-button';
import Screen from '../../../components/Screen';
import H1 from '../../../components/Typography/H1';
import P1 from '../../../components/Typography/P1';
import H3 from '../../../components/Typography/H3';
import H4 from '../../../components/Typography/H4';
import AppHeader from '../../../components/AppHeader';
import ButtonPrimary from '../../../components/Button/ButtonPrimary';

import colors from '../../../config/colors';

import i18n from '../../../i18n';
import tokens from '../../../i18n/tokens';

const styles = StyleSheet.create({
    flexRow: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 20,
        alignItems: 'center',
    },
    pageContainer: {
        padding: 20,
    },
    spacing: {
        marginVertical: 20,
    },
    imgContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    img: {
        width: 120,
        height: 160,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 40,
    },
});

const { Recovery, Financial, Support, Applied, Insurance, Yes, No } = tokens.app.recovery;
const { Next } = tokens.app.commonTerms;

type RecoveryProps = {
    navigation: any;
};

export default function RecoveryResourcesScreen(props: RecoveryProps) {
    const [current, setCurrent] = useState('option 1');
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
                    <H1 title={i18n.t(Recovery)} />
                    <View style={styles.spacing}>
                        <P1>{i18n.t(Financial)}</P1>
                    </View>
                    <H4 title={i18n.t(Support)} style={{ color: colors.text_terciary }} />
                    <View style={styles.flexRow}>
                        <RadioButton
                            value={i18n.t(Yes)}
                            containerStyle={{ marginRight: 40 }}
                            selected={current}
                            onSelected={(value: React.SetStateAction<string>) => setCurrent(value)}
                            radioBackground={colors.cta_primary}
                        >
                            <H3 title={i18n.t(Yes)} style={{ color: colors.cta_primary, marginLeft: 10 }} />
                        </RadioButton>
                        <RadioButton
                            value={i18n.t(No)}
                            selected={current}
                            onSelected={(value: React.SetStateAction<string>) => setCurrent(value)}
                            radioBackground={colors.cta_primary}
                        >
                            <H3 title={i18n.t(No)} style={{ color: colors.cta_primary, marginLeft: 10 }} />
                        </RadioButton>
                    </View>
                    <H4 title={i18n.t(Applied)} style={{ color: colors.text_terciary, marginLeft: 10 }} />
                    <View style={styles.flexRow}>
                        <RadioButton
                            value={i18n.t(Yes)}
                            containerStyle={{ marginRight: 40 }}
                            selected={current}
                            onSelected={(value: React.SetStateAction<string>) => setCurrent(value)}
                            radioBackground={colors.cta_primary}
                        >
                            <H3 title={i18n.t(Yes)} style={{ color: colors.cta_primary, marginLeft: 10 }} />
                        </RadioButton>
                        <RadioButton
                            value={i18n.t(No)}
                            selected={current}
                            onSelected={(value: React.SetStateAction<string>) => setCurrent(value)}
                            radioBackground={colors.cta_primary}
                        >
                            <H3 title={i18n.t(No)} style={{ color: colors.cta_primary, marginLeft: 10 }} />
                        </RadioButton>
                    </View>
                    <H4 title={i18n.t(Insurance)} style={{ color: colors.text_terciary }} />
                    <View style={styles.flexRow}>
                        <RadioButton
                            value={i18n.t(Yes)}
                            containerStyle={{ marginRight: 40 }}
                            selected={current}
                            onSelected={(value: React.SetStateAction<string>) => setCurrent(value)}
                            radioBackground={colors.cta_primary}
                        >
                            <H3 title={i18n.t(Yes)} style={{ color: colors.cta_primary, marginLeft: 10 }} />
                        </RadioButton>
                        <RadioButton
                            value={i18n.t(No)}
                            selected={current}
                            onSelected={(value: React.SetStateAction<string>) => setCurrent(value)}
                            radioBackground={colors.cta_primary}
                        >
                            <H3 title={i18n.t(No)} style={{ color: colors.cta_primary, marginLeft: 10 }} />
                        </RadioButton>
                    </View>
                    <View style={styles.btnContainer}>
                        <ButtonPrimary title={i18n.t(Next)} onPress={() => nextPage('SubmissionScreen')} />
                    </View>
                </View>
            </ScrollView>
        </Screen>
    );
}
