import React from 'react';
import { Text, StyleSheet } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
    text: {
        fontFamily: 'MontserratItalic',
        fontSize: 12,
        lineHeight: 16,
        color: colors.text_terciary,
        marginVertical: 8,
    },
});

interface Props {
    children: any;
}

function P3({ children }: Props) {
    return <Text style={styles.text}>{children}</Text>;
}

export default P3;
