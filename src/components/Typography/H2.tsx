import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
    h2: {
        fontFamily: 'MontserratBold',
        fontSize: 18,
        lineHeight: 24,
        color: colors.text_primary,
    },
});

type H2Props = {
    title: string;
    // eslint-disable-next-line react/require-default-props
    style?: {};
};

export default function H2(props: H2Props) {
    const { title, style } = props;
    return <Text style={[styles.h2, style]}>{title}</Text>;
}
