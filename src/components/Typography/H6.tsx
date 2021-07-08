import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
    h6: {
        fontFamily: 'MontserratBold',
        fontSize: 12,
        lineHeight: 16,
        color: colors.text_primary,
    },
});

type H6Props = {
    title: string;
    // eslint-disable-next-line react/require-default-props
    style?: {};
};

export default function H6(props: H6Props) {
    const { title, style } = props;
    return <Text style={[styles.h6, style]}>{title}</Text>;
}
