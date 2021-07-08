import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../config/colors';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        margin: 20,
    },
    text: {
        color: colors.text_primary,
        fontSize: 12,
        fontFamily: 'MontserratBold',
        letterSpacing: 0.7,
        marginLeft: 5,
    },
});

type CustomBtnProps = {
    title: any;
    onPress: any;
};

export default function BackLink(props: CustomBtnProps) {
    const { title, onPress } = props;
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Ionicons name="md-chevron-back" size={18} color="gray" />
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}
