import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.cta_primary,
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 150,
        paddingHorizontal: 16,
        height: 48,
        marginHorizontal: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.cta_primary,
    },
    text: {
        color: colors.white,
        fontSize: 12,
        fontFamily: 'MontserratBold',
        letterSpacing: 0.7,
        textTransform: 'uppercase',
    },
});

type CustomBtnProps = {
    title: any;
    onPress: any;
};

export default function AppButton(props: CustomBtnProps) {
    const { title, onPress } = props;
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}
