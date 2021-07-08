import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../../config/colors';

type CustomBtnProps = {
    title: any;
    onPress: any;
};

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 48,
        marginHorizontal: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.cta_primary,
    },
    text: {
        color: colors.cta_primary,
        borderStyle: 'solid',
        borderColor: colors.cta_primary,
        fontSize: 12,
        fontFamily: 'MontserratBold',
        letterSpacing: 0.7,
        textTransform: 'uppercase',
    },
});

export default function AppButton(props: CustomBtnProps) {
    const { title, onPress } = props;
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}
