import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import H1 from '../../../components/Typography/H1';
import H5 from '../../../components/Typography/H5';
import ButtonPrimary from '../../../components/Button/ButtonPrimary';

import colors from '../../../config/colors';

import i18n from '../../../i18n';
import tokens from '../../../i18n/tokens';

const styles = StyleSheet.create({
    pageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 80,
    },
    spacing: {
        marginVertical: 20,
    },
    imgContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    img: {
        width: 220,
        height: 215,
        marginVertical: 40,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 40,
    },
});

const { Thanks, Processing } = tokens.app.thanks;
const { Continue } = tokens.app.commonTerms;

type SubmissionProps = {
    navigation: any;
};

export default function SubmissionScreen(props: SubmissionProps) {
    const { navigation } = props;

    const nextPage = (screen: string) => {
        navigation.push(screen);
    };
    return (
        <View style={styles.pageContainer}>
            <View style={styles.imgContainer}>
                <Ionicons name="md-checkmark-circle-outline" size={128} color={colors.success} />
            </View>
            <H1 title={i18n.t(Thanks)} style={{ textAlign: 'center' }} />
            <View style={styles.spacing}>
                <H5 title={i18n.t(Processing)} />
            </View>
            <View style={styles.btnContainer}>
                <ButtonPrimary title={i18n.t(Continue)} onPress={() => nextPage('ApplyNavigation')} />
            </View>
        </View>
    );
}
