import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
    h5: {
        fontFamily: 'MontserratRegular',
        fontSize: 14,
        lineHeight: 12,
        color: colors.text_terciary,
    },
});

type H5Props = {
    title: string;
    // eslint-disable-next-line react/require-default-props
    style?: {};
};

export default function H5(props: H5Props) {
    const { title, style } = props;
    return <Text style={[styles.h5, style]}>{title}</Text>;
}
