import React from 'react';
import { Text, StyleSheet } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
    text: {
        fontFamily: 'MontserratMedium',
        fontSize: 16,
        lineHeight: 16,
        color: colors.text_primary,
        marginVertical: 8,
    },
});

interface Props {
    children: any;
}

function P2({ children }: Props) {
    return <Text style={styles.text}>{children}</Text>;
}

export default P2;
