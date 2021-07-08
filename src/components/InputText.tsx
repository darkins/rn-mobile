import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import colors from '../config/colors';

const styles = StyleSheet.create({
    input: {
        fontFamily: 'MontserratRegular',
        fontSize: 16,
        backgroundColor: colors.white,
        color: colors.black,
        paddingHorizontal: 12,
        borderRadius: 4,
        width: 320,
        height: 44,
        marginVertical: 5,
        borderWidth: 2,
        borderColor: colors.bg_four,
    },
});

type InputTextProps = {
    onChangeText: any;
};

export default function InputText(props: InputTextProps) {
    const { onChangeText } = props;
    return <TextInput style={styles.input} onChangeText={onChangeText} />;
}
