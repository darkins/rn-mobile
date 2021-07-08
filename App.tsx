import 'react-native-gesture-handler';

import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Constants from 'expo-constants';
import Routes from './src/navigation/Index';
import { AuthProvider } from './src/contexts/Auth';
import useCachedResources from './src/hooks/useCachedResources';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
});

const App: React.FC = () => {
    const isLoadingComplete = useCachedResources();

    if (!isLoadingComplete) {
        return null;
    }

    return (
        <React.StrictMode>
            <SafeAreaProvider style={styles.container}>
                <AuthProvider>
                    <NavigationContainer>
                        <Routes />
                    </NavigationContainer>
                </AuthProvider>
            </SafeAreaProvider>
        </React.StrictMode>
    );
};

export default App;
