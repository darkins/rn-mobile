import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../config/colors';
import H5 from './Typography/H5';
import H3 from './Typography/H3';

type CustomChildProps = {
    status: any;
    title: any;
    subTitle: any;
    image: any;
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 15,
        padding: 10,
        backgroundColor: colors.white,
        marginBottom: 20,
        shadowColor: colors.cta_primary,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4.84,

        elevation: 5,
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 60,
        height: 70,
        marginRight: 10,
    },
    subTitle: {
        color: colors.text_terciary,
    },
    chevron: {
        fontSize: 24,
        color: colors.black,
    },
});

export default function Card(props: CustomChildProps) {
    const { status, title, subTitle, image } = props;
    return (
        <View style={styles.card}>
            <View style={styles.flexRow}>
                <Image style={styles.image} source={image} />
                <View>
                    <H5 title={status} />
                    <H3 title={title} />
                    <Text style={styles.subTitle}>{subTitle}</Text>
                </View>
            </View>
            <Ionicons name="md-chevron-forward-outline" style={styles.chevron} />
        </View>
    );
}
