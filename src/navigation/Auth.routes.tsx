import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreens';
import ApplyNavigation from './ApplyNavigation';
import WalletTransactionsScreen from '../screens/WalletScreens/Transactions/WalletTransactionsScreen';
import WalletTransactionDetailScreen from '../screens/WalletScreens/Transactions/WalletTransactionDetailScreen';
import WalletAddBankAccountScreen from '../screens/WalletScreens/WalletAddBankAccountScreen';
import WalletGetCardScreen from '../screens/WalletScreens/WalletGetCardScreen';
import SendPaymentScreen from '../screens/SendScreens/SendPaymentScreen';
import StorePaymentScreen from '../screens/SendScreens/StorePaymentScreen';
import ScanqrCodeScreen from '../screens/SendScreens/ScanqrCodeScreen';
import SupportApplicationScreen from '../screens/ApplyScreens/SupportApplicationScreen';
import AdditionalDetailsScreen from '../screens/ApplyScreens/AdditionalDetailsScreen';
import UrgentNeedsScreen from '../screens/ApplyScreens/UrgentNeedsScreen';
import RecordVideoScreen from '../screens/ApplyScreens/RecordVideoScreen';
import DeleteVideoScreen from '../screens/ApplyScreens/DeleteVideoScreen';
import HouseholdInformationScreen from '../screens/ApplyScreens/HouseholdInformationScreen';
import RecoveryResourcesScreen from '../screens/ApplyScreens/RecoveryResourcesScreen';
import SubmissionScreen from '../screens/ApplyScreens/SubmissionScreen';
import ChatScreen from '../screens/ChatScreens/GiftedChatScreen';
import ShareDetailsScreen from '../screens/ApplyScreens/ShareDetailsScreen';
import PhotoReceiptScreen from '../screens/SendScreens/PhotoReceiptScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from '../screens/ProfileScreen/EditProfile';
import { UserProvider } from '../contexts/User';

const AuthRoutes = createStackNavigator();

export default function AuthRoutesNavigation() {
    return (
        <UserProvider>
            <AuthRoutes.Navigator initialRouteName="Root" headerMode="screen" screenOptions={{ headerShown: false }}>
                <AuthRoutes.Screen name="WelcomeScreen" component={WelcomeScreen} />
                <AuthRoutes.Screen name="LoginScreens" component={LoginScreen} />
                <AuthRoutes.Screen name="ApplyNavigation" component={ApplyNavigation} />

                <AuthRoutes.Screen name="WalletTransactionsScreen" component={WalletTransactionsScreen} />
                <AuthRoutes.Screen name="WalletTransactionDetailScreen" component={WalletTransactionDetailScreen} />
                <AuthRoutes.Screen name="WalletAddBankAccountScreen" component={WalletAddBankAccountScreen} />
                <AuthRoutes.Screen name="WalletGetCardScreen" component={WalletGetCardScreen} />

                <AuthRoutes.Screen name="SendPaymentScreen" component={SendPaymentScreen} />
                <AuthRoutes.Screen name="StorePaymentScreen" component={StorePaymentScreen} />
                <AuthRoutes.Screen name="ScanqrCodeScreen" component={ScanqrCodeScreen} />
                <AuthRoutes.Screen name="SupportApplicationScreen" component={SupportApplicationScreen} />
                <AuthRoutes.Screen name="AdditionalDetailsScreen" component={AdditionalDetailsScreen} />
                <AuthRoutes.Screen name="UrgentNeedsScreen" component={UrgentNeedsScreen} />
                <AuthRoutes.Screen name="RecordVideoScreen" component={RecordVideoScreen} />
                <AuthRoutes.Screen name="DeleteVideoScreen" component={DeleteVideoScreen} />
                <AuthRoutes.Screen name="HouseholdInformationScreen" component={HouseholdInformationScreen} />
                <AuthRoutes.Screen name="RecoveryResourcesScreen" component={RecoveryResourcesScreen} />
                <AuthRoutes.Screen name="SubmissionScreen" component={SubmissionScreen} />
                <AuthRoutes.Screen name="ChatScreen" component={ChatScreen} />
                <AuthRoutes.Screen name="ShareDetails" component={ShareDetailsScreen} />
                <AuthRoutes.Screen name="AdditionalDetailScreen" component={AdditionalDetailsScreen} />
                <AuthRoutes.Screen name="PhotoReceiptScreen" component={PhotoReceiptScreen} />
                <AuthRoutes.Screen name="ProfileScreen" component={ProfileScreen} />
                <AuthRoutes.Screen name="EditProfileScreen" component={EditProfileScreen} />
            </AuthRoutes.Navigator>
        </UserProvider>
    );
}
