import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import Header from '../../components/Header';
import Screen from '../../components/Screen';

import i18n from '../../i18n';
import tokens from '../../i18n/tokens';
import colors from '../../config/colors';
import Card from '../../components/Card';
import H4 from '../../components/Typography/H4';

const { Your, Available, Brian } = tokens.app.dashboard;
const { Chat, Charity1, Charity2 } = tokens.app.commonTerms;

const svdp = require('../../../assets/images/svdp.png');
const americares = require('../../../assets/images/americares.png');

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignContent: 'flex-start',
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    warning: {
        color: colors.warning,
    },
    success: {
        color: colors.success,
    },
});

type ApplicationProps = {
    navigation: any;
};

export default function ApplicationsHomeScreen(props: ApplicationProps) {
    const { navigation } = props;

    const nextPage = (screen: string) => {
        navigation.push(screen);
    };

    return (
        <Screen>
            <ScrollView>
                <Header title={i18n.t(Chat)} />
                <View style={styles.container}>
                    <View style={styles.headingContainer}>
                        <Ionicons name="md-ellipse" style={styles.success} />
                        <H4 title={i18n.t(Your)} />
                    </View>
                    <TouchableOpacity onPress={() => nextPage('ChatScreen')}>
                        <Card
                            status={i18n.t(Available)}
                            title={i18n.t(Brian)}
                            subTitle={i18n.t(Charity1)}
                            image={svdp}
                        />
                    </TouchableOpacity>
                    <Card
                        status={i18n.t(Available)}
                        title={i18n.t(Brian)}
                        subTitle={i18n.t(Charity2)}
                        image={americares}
                    />
                </View>
            </ScrollView>
        </Screen>
    );
}
