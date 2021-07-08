import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
    h4: {
        fontFamily: 'MontserratSemiBold',
        fontSize: 14,
        lineHeight: 20,
        color: colors.text_primary,
    },
});

type H4Props = {
    title: string;
    // eslint-disable-next-line react/require-default-props
    style?: {};
};

export default function H4(props: H4Props) {
    const { title, style } = props;
    return <Text style={[styles.h4, style]}>{title}</Text>;
}
