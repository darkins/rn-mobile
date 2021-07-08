import * as React from 'react';
import { createContext, useState } from 'react';
import { gql } from '@apollo/client';
import { ApolloQueryResult } from 'apollo-client';
import { client } from '../../Service-Apollo-AWS';

interface User {
    id?: string;
    country?: string;
    phone?: string;
    pinCode?: string;
    firstName?: string;
    lastName?: string;
    numberSecuritySocial?: string;
    dateOfBirth?: string;
    femaNumber?: string;
    state?: string;
    city?: string;
    street?: string;
    postalCode?: string;
    email?: string;
}

interface UserContextData {
    setUserStepData(userRequest: User): boolean;
    completeRegistration();
    requestUser(email: string | undefined);
}

export const UserContext = createContext<UserContextData>({} as UserContextData);

type UserProviderProps = { children: any };

export function UserProvider(props: UserProviderProps) {
    const [user, setUser] = useState<User>({});
    const { children } = props;

    const setUserStepData = (data: User): boolean => {
        setUser({ ...user, ...data });
        return true;
    };

    const completeRegistration = () => {
        client.mutate({
            mutation: gql`
                mutation MyMutation {
                    createUserType(
                        input: {
                            city: "${user.city}"
                            country: "${user.country}"
                            dateOfBirth: "${user.dateOfBirth}"
                            email:  "${user.email}"
                            femaNumber: "${user.femaNumber}"
                            firstName: "${user.firstName}"
                            lastName: "${user.lastName}"
                            phoneNumber: "${user.phone}"
                            pinCode: "${user.pinCode}"
                            postalCode: "${user.postalCode}"
                            ssn: "${user.numberSecuritySocial}"
                            state: "${user.state}"
                            street: "${user.street}"
                        }
                    ) {
                        id
                        city
                        country
                        dateOfBirth
                        email
                        femaNumber
                        firstName
                        lastName
                        phoneNumber
                        pinCode
                        postalCode
                        ssn
                        state
                        street
                    }
                }
            `,
        });
    };

    const requestUser = (email: string) => {
        client
            .query({
                query: gql`
                    query listUserTypes {
                        listUserTypes(filter: { email: { eq: "${email}" } }) {
                            items {
                                id
                                firstName
                                lastName
                                pinCode
                                ssn
                                dateOfBirth
                                country
                                phoneNumber
                                femaNumber
                                state
                                city
                                street
                                postalCode
                                email
                            }
                        }
                    }
                `,
            })
            .then((result: ApolloQueryResult<any>) => {
                setUser(result.data.listUserTypes.items[0]);
            });
    };

    return (
        <UserContext.Provider value={{ setUserStepData, completeRegistration, requestUser }}>
            {children}
        </UserContext.Provider>
    );
}
