import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import H1 from './Typography/H1';
import P1 from './Typography/P1';

const elipse = require('../../assets/images/elipse.png');
const elipseDulpe = require('../../assets/images/elipseDuple.png');

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-evenly',
        borderRadius: 20,
        backgroundColor: colors.white,
        height: 200,
        width: '100%',
        padding: 16,
        marginVertical: 20,
    },
    detail: {
        fontSize: 12,
        color: colors.text_primary,
        marginTop: 10,
        width: 234,
        lineHeight: 15,
    },
});

type CardGetCardProps = {
    title: string;
    detail: string;
    img: string;
};

export default function CardGetCard(props: CardGetCardProps) {
    const { title, detail, img } = props;

    return (
        <View>
            {img === 'elipseDuple' && (
                <View style={styles.container}>
                    <H1 title={title} />
                    <P1>{detail}</P1>
                    <Image source={elipseDulpe} />
                </View>
            )}

            {img === 'elipse' && (
                <View style={styles.container}>
                    <H1 title={title} />
                    <P1>{detail}</P1>
                    <Image source={elipse} />
                </View>
            )}
        </View>
    );
}
