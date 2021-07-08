import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PhoneRegisterScreen from '../screens/Registration/PhoneRegisterScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import DashboardScreen from '../screens/ApplyScreens/DashboardScreen';
import InputPinScreen from '../screens/Registration/InputPinScreen';
import CreatePinScreen from '../screens/Registration/CreatePinScreen';
import PersonDetailScreen from '../screens/Registration/PersonDetailScreen';
import VerifyAddressScreen from '../screens/Registration/VerifyAddressScreen';
import VerifyEmailAddressScreen from '../screens/Registration/VerifyEmailAddressScreen';
import RegistrationEndScreen from '../screens/Registration/RegistrationEndScreen';
import LoginScreen from '../screens/LoginScreens';
import ProfileScreen from '../screens/ProfileScreen';
import { UserProvider } from '../contexts/User';

const AppRoutes = createStackNavigator();

export default function AppRoutesNavigation() {
    return (
        <UserProvider>
            <AppRoutes.Navigator screenOptions={{ headerShown: false }}>
                <AppRoutes.Screen name="WelcomeScreen" component={WelcomeScreen} />
                <AppRoutes.Screen name="DashboardScreen" component={DashboardScreen} />
                <AppRoutes.Screen name="PhoneRegister" component={PhoneRegisterScreen} />
                <AppRoutes.Screen name="PIN" component={InputPinScreen} />
                <AppRoutes.Screen name="CreatePin" component={CreatePinScreen} />
                <AppRoutes.Screen name="PersonDetailScreen" component={PersonDetailScreen} />
                <AppRoutes.Screen name="VerifyAddressScreen" component={VerifyAddressScreen} />
                <AppRoutes.Screen name="VerifyEmailAddressScreen" component={VerifyEmailAddressScreen} />
                <AppRoutes.Screen name="RegistrationEndScreen" component={RegistrationEndScreen} />
                <AppRoutes.Screen name="LoginScreens" component={LoginScreen} />
                <AppRoutes.Screen name="ProfileScreen" component={ProfileScreen} />
            </AppRoutes.Navigator>
        </UserProvider>
    );
}
