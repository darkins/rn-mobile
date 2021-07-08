import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import Screen from '../../../components/Screen';
import H1 from '../../../components/Typography/H1';
import H6 from '../../../components/Typography/H6';
import P1 from '../../../components/Typography/P1';
import AppHeader from '../../../components/AppHeader';
import ButtonPrimary from '../../../components/Button/ButtonPrimary';

import colors from '../../../config/colors';
import i18n from '../../../i18n';
import tokens from '../../../i18n/tokens';

const styles = StyleSheet.create({
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    pageContainer: {
        padding: 20,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 40,
    },
    list: {
        fontFamily: 'MontserratBold',
        color: colors.text_terciary,
    },
    icons: {
        color: colors.cta_primary,
        fontSize: 32,
        fontFamily: 'MontserratBold',
    },
});

const { Share, Ssn, Email, Phone, Disaster, Fema } = tokens.app.share;
const { Next } = tokens.app.commonTerms;

type ShareProps = {
    navigation: any;
};

export default function ShareDetailsScreen(props: ShareProps) {
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
                    <H1 title={i18n.t(Share)} />
                    <View style={styles.flexRow}>
                        <View>
                            <H6 title={i18n.t(Ssn)} />
                            <P1>*** ** 5746</P1>
                        </View>
                    </View>
                    <View style={styles.flexRow}>
                        <View>
                            <H6 title={i18n.t(Email)} />
                            <P1>gabriela.brown@gmail.com</P1>
                        </View>
                    </View>
                    <View style={styles.flexRow}>
                        <View>
                            <H6 title={i18n.t(Phone)} />
                            <P1>+1 202 555 0156</P1>
                        </View>
                    </View>
                    <View style={styles.flexRow}>
                        <View>
                            <H6 title={i18n.t(Disaster)} />
                            <P1>1799 Ezie Ave, Clovis, CA 93611, USA</P1>
                        </View>
                    </View>
                    <View style={styles.flexRow}>
                        <View>
                            <H6 title={i18n.t(Fema)} />
                            <P1>AL746 7452 23</P1>
                        </View>
                    </View>
                    <View style={styles.btnContainer}>
                        <ButtonPrimary title={i18n.t(Next)} onPress={() => nextPage('UrgentNeedsScreen')} />
                    </View>
                </View>
            </ScrollView>
        </Screen>
    );
}
