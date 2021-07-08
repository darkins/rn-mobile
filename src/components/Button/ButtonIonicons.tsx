import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../config/colors';

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 4,
        alignItems: 'center',
        backgroundColor: colors.cta_primary,
    },
    text: {
        color: colors.white,
        fontSize: 14,
        fontFamily: 'MontserratBold',
        paddingRight: 16,
    },
});

type CustomBtnProps = {
    title: string;
    onPress: any;
    iconName: any;
    iconSize: number;
    colorIcon: string;
};

export default function ButtonIonicons(props: CustomBtnProps) {
    const { title, onPress, iconName, iconSize, colorIcon } = props;
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
            <Ionicons name={iconName} size={iconSize} color={colorIcon} />
        </TouchableOpacity>
    );
}
