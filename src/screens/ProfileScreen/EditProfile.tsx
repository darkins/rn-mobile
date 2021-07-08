import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Screen from '../../components/Screen';
import H4 from '../../components/Typography/H4';
import H6 from '../../components/Typography/H6';
import Header from '../../components/Header';
import ButtonPrimary from '../../components/Button/ButtonPrimary';

import colors from '../../config/colors';
import i18n from '../../i18n';
import tokens from '../../i18n/tokens';
import InputText from '../../components/InputText';

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

const { EditProfile, EditDetails, Name, Dob, Ssn, Email, Phone, Disaster, Fema } = tokens.app.share;
const { Save } = tokens.app.commonTerms;

type EditProfileProps = {
    navigation: any;
};

export default function EditProfileScreen(props: EditProfileProps) {
    const { navigation } = props;

    const nextPage = (screen: string) => {
        navigation.push(screen);
    };
    return (
        <Screen>
            <Header title={i18n.t(EditProfile)} />
            <ScrollView>
                <View style={styles.pageContainer}>
                    <View>
                        <H4 title={i18n.t(EditDetails)} style={{ color: colors.text_terciary }} />
                    </View>
                    <View style={styles.flexRow}>
                        <View>
                            <H6 title={i18n.t(Name)} />
                            <InputText onChangeText={() => {}} />
                        </View>
                    </View>
                    <View style={styles.flexRow}>
                        <View>
                            <H6 title={i18n.t(Dob)} />
                            <InputText onChangeText={() => {}} />
                        </View>
                    </View>
                    <View style={styles.flexRow}>
                        <View>
                            <H6 title={i18n.t(Email)} />
                            <InputText onChangeText={() => {}} />
                        </View>
                    </View>
                    <View style={styles.flexRow}>
                        <View>
                            <H6 title={i18n.t(Phone)} />
                            <InputText onChangeText={() => {}} />
                        </View>
                    </View>
                    <View style={styles.flexRow}>
                        <View>
                            <H6 title={i18n.t(Disaster)} />
                            <InputText onChangeText={() => {}} />
                        </View>
                    </View>
                    <View style={styles.flexRow}>
                        <View>
                            <H6 title={i18n.t(Fema)} />
                            <InputText onChangeText={() => {}} />
                        </View>
                    </View>
                    <View style={styles.flexRow}>
                        <View>
                            <H6 title={i18n.t(Ssn)} />
                            <InputText onChangeText={() => {}} />
                        </View>
                    </View>
                    <View style={styles.btnContainer}>
                        <ButtonPrimary title={i18n.t(Save)} onPress={() => nextPage('ProfileScreen')} />
                    </View>
                </View>
            </ScrollView>
        </Screen>
    );
}
