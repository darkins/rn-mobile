import React, { useContext } from 'react';

import { AuthContext } from '../contexts/Auth';

import AppRoutesNavigation from './App.routes';
import AuthRoutesNavigation from './Auth.routes';

export default function Routes() {
    const { signed } = useContext(AuthContext);

    return signed ? <AuthRoutesNavigation /> : <AppRoutesNavigation />;
}
