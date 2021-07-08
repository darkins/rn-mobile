import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import Screen from '../../../components/Screen';
import H1 from '../../../components/Typography/H1';
import AppHeader from '../../../components/AppHeader';
import ButtonPrimary from '../../../components/Button/ButtonPrimary';

import colors from '../../../config/colors';
import i18n from '../../../i18n';
import tokens from '../../../i18n/tokens';

const video = require('../../../../assets/images/delete-video.png');

const styles = StyleSheet.create({
    pageHead: {
        fontSize: 32,
        fontFamily: 'MontserratBold',
        color: colors.text_terciary,
        marginBottom: 40,
    },
    paraText: {
        fontSize: 14,
        fontFamily: 'MontserratBold',
        color: colors.text_terciary,
        marginBottom: 40,
    },
    pageContainer: {
        padding: 20,
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

const { Describe, Record } = tokens.app.record;
const { Next } = tokens.app.commonTerms;

type VideoProps = {
    navigation: any;
};

export default function DeleteVideoScreen(props: VideoProps) {
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
                    <H1 title={i18n.t(Describe)} />
                    <Text style={styles.paraText}>{i18n.t(Record)}</Text>
                    <View style={styles.imgContainer}>
                        <Image style={styles.img} source={video} />
                    </View>
                    <View style={styles.btnContainer}>
                        <ButtonPrimary title={i18n.t(Next)} onPress={() => nextPage('HouseholdInformationScreen')} />
                    </View>
                </View>
            </ScrollView>
        </Screen>
    );
}
