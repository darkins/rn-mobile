import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
    h1: {
        fontFamily: 'MontserratRegular',
        fontSize: 28,
        lineHeight: 36,
        color: colors.text_primary,
    },
});

type H1Props = {
    title: string;
    // eslint-disable-next-line react/require-default-props
    style?: {};
};

export default function H1(props: H1Props) {
    const { title, style } = props;
    return <Text style={[styles.h1, style]}>{title}</Text>;
}
