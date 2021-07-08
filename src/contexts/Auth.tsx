import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from '../middleware/AxiosInstance';

const ServiceDiscovery = require('../constants/ServiceDiscovery');

interface User {
    email: string;
}

interface AuthContextData {
    signed: boolean;
    user: User | null;
    loading: boolean;
    signIn(data: any): Promise<User>;
    signOut(): void;
}

type AuthProviderProps = { children: any };

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AUTH_TOKEN_KEY = 'token';

export function AuthProvider(props: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);
    const { children } = props;

    async function signIn(dataSignIn: any): Promise<any> {
        try {
            setLoading(true);
            const { username } = dataSignIn;
            const authRequestPayload = {
                username,
                password: dataSignIn.password,
            };
            const response = await axiosInstance.post(`${ServiceDiscovery.default.urlLogin}`, authRequestPayload);
            if (response.status === 200) {
                const userResponse: User = {
                    email: username,
                };
                setUser(userResponse);
                await AsyncStorage.setItem(AUTH_TOKEN_KEY, response.data);
                setLoading(false);
                return true;
            }
            setUser(null);
            return false;
        } catch (e) {
            setLoading(false);
            return false;
        }
    }

    function signOut() {
        AsyncStorage.clear().then(() => {
            setUser(null);
        });
    }

    useEffect(() => {
        AsyncStorage.getItem(AUTH_TOKEN_KEY).then((storageToken) => {
            if (storageToken) {
                setLoading(false);
            }
        });
    }, []);

    return (
        <AuthContext.Provider value={{ signed: Boolean(user), user, signIn, signOut, loading }}>
            {children}
        </AuthContext.Provider>
    );
}
