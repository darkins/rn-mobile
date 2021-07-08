import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import H1 from './Typography/H1';
import colors from '../config/colors';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingTop: 40,
        paddingBottom: 20,
        paddingHorizontal: 20,
        backgroundColor: colors.white,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginBottom: 20,
    },
    icons: {
        flexDirection: 'row',
    },
    person: {
        fontSize: 32,
        color: colors.text_primary,
        marginRight: 10,
    },
    bell: {
        fontSize: 24,
        color: colors.text_primary,
        alignSelf: 'center',
    },
});

type HeaderProps = {
    title: any;
};

export default function Header(props: HeaderProps) {
    const { title } = props;
    return (
        <View style={styles.container}>
            <H1 title={title} />
            <View style={styles.icons}>
                <Ionicons name="md-person-circle" style={styles.person} />
                <Ionicons name="md-notifications-outline" style={styles.bell} />
            </View>
        </View>
    );
}
