import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import Screen from '../../../components/Screen';
import H1 from '../../../components/Typography/H1';
import AppHeader from '../../../components/AppHeader';
import ButtonPrimary from '../../../components/Button/ButtonPrimary';
import CheckBox from '../../../components/CheckBox';

import colors from '../../../config/colors';

import i18n from '../../../i18n';
import tokens from '../../../i18n/tokens';

const {
    What,
    Item1,
    Item2,
    Item3,
    Item4,
    Item5,
    Item6,
    Item7,
    Item8,
    Item9,
    Item10,
    Item11,
    Item12,
    Item13,
    Item14,
    Item15,
    Item16,
    Item17,
    Item18,
} = tokens.app.urgent;
const { Next } = tokens.app.commonTerms;

const styles = StyleSheet.create({
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    inlineFlex: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 220,
    },
    pageContainer: {
        flex: 1,
        padding: 20,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 40,
    },
    icons: {
        color: colors.cta_secondary,
        fontSize: 24,
        fontFamily: 'MontserratBold',
        marginLeft: 10,
    },
});

type UrgentNeedsProps = {
    navigation: any;
};

export default function UrgentNeedsScreen(props: UrgentNeedsProps) {
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
                    <H1 title={i18n.t(What)} style={{ marginBottom: 20 }} />
                    <View style={styles.flexRow}>
                        <CheckBox label={i18n.t(Item1)} />
                        <Ionicons name="md-help-circle-outline" style={styles.icons} />
                    </View>
                    <View style={styles.flexRow}>
                        <CheckBox label={i18n.t(Item2)} />
                    </View>
                    <View style={styles.flexRow}>
                        <CheckBox label={i18n.t(Item3)} />
                        <Ionicons name="md-help-circle-outline" style={styles.icons} />
                    </View>
                    <View style={styles.flexRow}>
                        <CheckBox label={i18n.t(Item4)} />
                    </View>
                    <View style={styles.flexRow}>
                        <CheckBox label={i18n.t(Item5)} />
                    </View>
                    <View style={styles.flexRow}>
                        <CheckBox label={i18n.t(Item6)} />
                        <Ionicons name="md-help-circle-outline" style={styles.icons} />
                    </View>
                    <View style={styles.flexRow}>
                        <CheckBox label={i18n.t(Item7)} />
                        <Ionicons name="md-help-circle-outline" style={styles.icons} />
                    </View>
                    <View style={styles.flexRow}>
                        <CheckBox label={i18n.t(Item8)} />
                    </View>
                    <View style={styles.flexRow}>
                        <CheckBox label={i18n.t(Item9)} />
                    </View>
                    <View style={styles.flexRow}>
                        <CheckBox label={i18n.t(Item10)} />
                    </View>
                    <View style={styles.flexRow}>
                        <CheckBox label={i18n.t(Item11)} />
                        <Ionicons name="md-help-circle-outline" style={styles.icons} />
                    </View>
                    <View style={styles.flexRow}>
                        <CheckBox label={i18n.t(Item12)} />
                    </View>
                    <View style={styles.flexRow}>
                        <CheckBox label={i18n.t(Item13)} />
                    </View>
                    <View style={styles.flexRow}>
                        <CheckBox label={i18n.t(Item14)} />
                    </View>
                    <View style={styles.flexRow}>
                        <CheckBox label={i18n.t(Item15)} />
                    </View>
                    <View style={styles.flexRow}>
                        <CheckBox label={i18n.t(Item16)} />
                    </View>
                    <View style={styles.flexRow}>
                        <CheckBox label={i18n.t(Item17)} />
                        <Ionicons name="md-help-circle-outline" style={styles.icons} />
                    </View>
                    <View style={styles.flexRow}>
                        <CheckBox label={i18n.t(Item18)} />
                    </View>
                    <View style={styles.btnContainer}>
                        <ButtonPrimary title={i18n.t(Next)} onPress={() => nextPage('AdditionalDetailScreen')} />
                    </View>
                </View>
            </ScrollView>
        </Screen>
    );
}
