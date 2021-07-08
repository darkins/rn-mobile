import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import colors from '../config/colors';

type CustomChildProps = {
    children: any;
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.bg_one,
    },
});

export default function Screen(props: CustomChildProps) {
    const { children } = props;
    return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}
