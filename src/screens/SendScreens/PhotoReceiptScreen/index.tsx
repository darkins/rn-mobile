import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Camera } from 'expo-camera';
import Lottie from 'lottie-react-native';

import { Ionicons } from '@expo/vector-icons';
import i18n from '../../../i18n';
import tokens from '../../../i18n/tokens';
import colors from '../../../config/colors';

const Loading = require('../../../components/890-loading-animation.json');

const { NoAccess } = tokens.app.commonTerms;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 60,
        backgroundColor: colors.black,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 20,
    },
    buttonBall: {
        alignSelf: 'flex-end',
    },
    button: {
        alignSelf: 'flex-end',
        marginLeft: 80,
    },
});

interface UserData {
    status: any;
}

type PhotoReceiptProps = {
    navigation: any;
};

export default function PhotoReceiptScreen(props: PhotoReceiptProps) {
    const { navigation } = props;

    const nextPage = (screen: string) => {
        navigation.push(screen);
    };

    const camRef = useRef<any>(null);
    const [hasPermission, setHasPermission] = useState<UserData | any>(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }

    if (hasPermission === false) {
        return <Text>{i18n.t(NoAccess)}</Text>;
    }

    async function takePicture() {
        if (camRef) {
            setLoading(true);
            await camRef.current.takePictureAsync();
            nextPage('DeleteVideoScreen');
        }
    }

    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={type} ref={camRef}>
                <View style={styles.buttonContainer}>
                    {loading ? <Lottie source={Loading} resizeMode="contain" autoPlay loop /> : null}
                    <Ionicons
                        style={styles.button}
                        onPress={takePicture}
                        name="ios-basketball-sharp"
                        size={48}
                        color="white"
                    />
                    <Ionicons
                        style={styles.button}
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back,
                            );
                        }}
                        name="ios-camera-reverse-outline"
                        size={24}
                        color="white"
                    />
                </View>
            </Camera>
        </View>
    );
}
