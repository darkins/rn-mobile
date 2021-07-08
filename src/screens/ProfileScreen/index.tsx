import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import Screen from '../../components/Screen';
import BackLink from '../../components/BackLink';
import H4 from '../../components/Typography/H4';
import H6 from '../../components/Typography/H6';
import P1 from '../../components/Typography/P1';
import Header from '../../components/Header';

import colors from '../../config/colors';
import i18n from '../../i18n';
import tokens from '../../i18n/tokens';

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
    spaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    containerButtonContinue: {
        alignItems: 'center',
    },
});

const { Profile, Details, Name, Dob, Ssn, Email, Phone, Disaster, Fema } = tokens.app.share;
const { Previous } = tokens.app.commonTerms;

type ProfileProps = {
    navigation: any;
};

export default function ProfileScreen(props: ProfileProps) {
    const { navigation } = props;

    const nextPage = (screen: string) => {
        navigation.push(screen);
    };
    return (
        <Screen>
            <Header title={i18n.t(Profile)} />
            <ScrollView>
                <View style={styles.pageContainer}>
                    <View style={styles.spaceBetween}>
                        <H4 title={i18n.t(Details)} style={{ color: colors.text_terciary }} />
                        <Ionicons
                            name="md-create"
                            size={32}
                            style={{ color: colors.cta_primary }}
                            onPress={() => nextPage('EditProfileScreen')}
                        />
                    </View>
                    <View style={styles.flexRow}>
                        <View>
                            <H6 title={i18n.t(Name)} />
                            <P1>Gabriela Brown</P1>
                        </View>
                    </View>
                    <View style={styles.flexRow}>
                        <View>
                            <H6 title={i18n.t(Dob)} />
                            <P1>02/12/1979</P1>
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
                    <View style={styles.flexRow}>
                        <View>
                            <H6 title={i18n.t(Ssn)} />
                            <P1>*** ** 5746</P1>
                        </View>
                    </View>
                    <View style={styles.containerButtonContinue}>
                        <BackLink title={i18n.t(Previous)} onPress={() => navigation.goBack()} />
                    </View>
                </View>
            </ScrollView>
        </Screen>
    );
}
