/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React, { createContext, useReducer } from 'react';
import { users } from '../data/users.js';

const initialState = { users };
const UsersContext = createContext({});

export const UsersProvider = (props) => {
    const actions = {
        updateUser(state, action) {
            const updated = action.payload;
            return {
                ...state,
                users: state.users.map((u) => (u.id === updated.id ? updated : u)),
            };
        },
    };

    function reducer(state, action) {
        const fn = actions[action.type];

        return fn ? fn(state, action) : state;
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return <UsersContext.Provider value={{ state, dispatch }}>{props.children}</UsersContext.Provider>;
};

export default UsersContext;
