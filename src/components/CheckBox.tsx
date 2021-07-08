import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import H6 from './Typography/H6';

const styles = StyleSheet.create({
    checkboxContainer: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    textWrap: {
        flexShrink: 1,
    },
    checkbox: {
        margin: 8,
    },
});

type CheckBoxProps = {
    label: string;
};

export default function CheckBoxComponent(props: CheckBoxProps) {
    const { label } = props;
    const [isChecked, setChecked] = useState(false);
    return (
        <View style={styles.checkboxContainer}>
            <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? 'red' : undefined}
            />
            <H6 title={label} style={styles.textWrap} />
        </View>
    );
}
