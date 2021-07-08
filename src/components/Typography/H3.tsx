import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
    h3: {
        fontFamily: 'MontserratBold',
        fontSize: 16,
        lineHeight: 24,
        color: colors.text_primary,
    },
});

type H3Props = {
    title: string;
    // eslint-disable-next-line react/require-default-props
    style?: {};
};

export default function H3(props: H3Props) {
    const { title, style } = props;
    return <Text style={[styles.h3, style]}>{title}</Text>;
}
