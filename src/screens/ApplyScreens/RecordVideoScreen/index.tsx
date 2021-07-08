import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import Screen from '../../../components/Screen';
import H1 from '../../../components/Typography/H1';
import AppHeader from '../../../components/AppHeader';

import colors from '../../../config/colors';
import i18n from '../../../i18n';
import tokens from '../../../i18n/tokens';
import P1 from '../../../components/Typography/P1';

const video = require('../../../../assets/images/record-video.png');

const styles = StyleSheet.create({
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
    textLink: {
        fontFamily: 'MontserratSemiBold',
        padding: 14,
        color: colors.cta_primary,
    },
});

const { Describe, Record, Skip } = tokens.app.record;

type RecordProps = {
    navigation: any;
};

export default function RecordVideoScreen(props: RecordProps) {
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
                    <P1>{i18n.t(Record)}</P1>
                    <View style={styles.imgContainer}>
                        <Image style={styles.img} source={video} />
                    </View>
                    <View style={styles.btnContainer}>
                        <Text style={styles.textLink} onPress={() => nextPage('PhotoReceiptScreen')}>
                            {i18n.t(Skip)}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </Screen>
    );
}
