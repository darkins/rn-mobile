import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useState, useEffect } from 'react';

const MontserratRegular = require('../../assets/fonts/Montserrat-Regular.otf');
const MontserratBold = require('../../assets/fonts/Montserrat-Bold.otf');
const MontserratSemiBold = require('../../assets/fonts/Montserrat-SemiBold.otf');
const MontserratMedium = require('../../assets/fonts/Montserrat-Medium.otf');
const MontserratItalic = require('../../assets/fonts/Montserrat-Italic.otf');

export default function useCachedResources() {
    const [isLoadingComplete, setLoadingComplete] = useState(false);

    useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                SplashScreen.preventAutoHideAsync();

                await Font.loadAsync({
                    MontserratRegular,
                    MontserratBold,
                    MontserratSemiBold,
                    MontserratMedium,
                    MontserratItalic,
                });
            } finally {
                setLoadingComplete(true);
                SplashScreen.hideAsync();
            }
        }

        loadResourcesAndDataAsync();
    }, []);

    return isLoadingComplete;
}
