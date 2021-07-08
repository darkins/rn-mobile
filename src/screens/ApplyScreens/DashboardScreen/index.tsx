import React, { useContext, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { RectButton, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import Header from '../../../components/Header';
import Screen from '../../../components/Screen';

import i18n from '../../../i18n';
import tokens from '../../../i18n/tokens';
import colors from '../../../config/colors';
import Card from '../../../components/Card';
import H4 from '../../../components/Typography/H4';
import { AuthContext } from '../../../contexts/Auth';
import { UserContext } from '../../../contexts/User';

const svdp = require('../../../../assets/images/svdp.png');
const americares = require('../../../../assets/images/americares.png');

const { Near, Available, Brian } = tokens.app.dashboard;
const { Apply, Charity1, Charity2 } = tokens.app.commonTerms;

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
    greenDot: {
        color: colors.success,
        fontSize: 8,
        marginRight: 6,
    },
});

type DashboardProps = {
    navigation: any;
};

export default function DashboardHomeScreen(props: DashboardProps) {
    const { navigation } = props;
    const { user } = useContext(AuthContext);
    const { requestUser } = useContext(UserContext);

    const nextPage = (screen: string) => {
        navigation.push(screen);
    };

    useEffect(() => {
        const email = user?.email;
        requestUser(email);
    });

    return (
        <Screen>
            <ScrollView>
                <RectButton onPress={() => nextPage('ProfileScreen')}>
                    <Header title={i18n.t(Apply)} />
                </RectButton>
                <View style={styles.container}>
                    <View style={styles.headingContainer}>
                        <Ionicons name="md-ellipse" style={styles.greenDot} />
                        <H4 title={i18n.t(Near)} />
                    </View>
                    <TouchableOpacity onPress={() => nextPage('SupportApplicationScreen')}>
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
