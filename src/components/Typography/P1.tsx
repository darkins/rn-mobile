import React from 'react';
import { Text, StyleSheet } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
    text: {
        fontFamily: 'MontserratMedium',
        fontSize: 12,
        lineHeight: 16,
        color: colors.text_terciary,
        marginVertical: 8,
    },
});

interface Props {
    children: any;
    // eslint-disable-next-line react/require-default-props
    style?: {};
}

function P1({ children, style }: Props) {
    return <Text style={[styles.text, style]}>{children}</Text>;
}

export default P1;
