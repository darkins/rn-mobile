/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useContext, useState } from 'react';
import { StyleSheet, Text, Button, SafeAreaView } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import UserContext from '../../contexts/User';

const style = StyleSheet.create({
    form: {
        padding: 15,
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    input: {
        height: 45,
        paddingHorizontal: 10,
        color: '#424242',
        borderColor: '#e0e0e0',
        backgroundColor: '#eeeeee',
        borderRadius: 3,
        borderWidth: 1,
        marginBottom: 12,
    },
});

export default ({ route, navigation }) => {
    // console.warn(Object.keys(props.route.params))

    const [user, setUser] = useState(route.params ? route.params : {});
    const { dispatch } = useContext(UserContext);

    return (
        <SafeAreaView style={style.form}>
            <ScrollView>
                <Text style={style.heading}>Name</Text>
                <TextInput
                    onChangeText={(name) => setUser({ ...user, name })}
                    placeholder="Name"
                    value={user.name}
                    style={style.input}
                />
                <Text style={style.heading}>Date of Birth</Text>
                <TextInput
                    onChangeText={(dob) => setUser({ ...user, dob })}
                    placeholder="Date of Birth"
                    value={user.dob}
                    style={style.input}
                    keyboardType="birth-date"
                />
                <Text style={style.heading}>Email</Text>
                <TextInput
                    onChangeText={(email) => setUser({ ...user, email })}
                    placeholder="E-mail"
                    value={user.email}
                    style={style.input}
                    keyboardType="email-address"
                />
                <Text style={style.heading}>Phone Number</Text>
                <TextInput
                    onChangeText={(phone) => setUser({ ...user, phone })}
                    placeholder="Number"
                    value={user.phone}
                    style={style.input}
                    keyboardType="phone-number"
                />
                <Text style={style.heading}>Address of Disaster</Text>
                <TextInput
                    onChangeText={(address) => setUser({ ...user, address })}
                    placeholder="Disaster impact address"
                    value={user.address}
                    style={style.input}
                    keyboardType="disaster-address"
                />
                <Text style={style.heading}>FEMA Number</Text>
                <TextInput
                    onChangeText={(fema) => setUser({ ...user, fema })}
                    placeholder="FEMA Number"
                    value={user.fema}
                    style={style.input}
                    keyboardType="fema-number"
                />
                <Text style={style.heading}>Social Security Number</Text>
                <TextInput
                    onChangeText={(ssn) => setUser({ ...user, ssn })}
                    placeholder="Social Security Number"
                    value={user.ssn}
                    style={style.input}
                    keyboardType="ssn-number"
                />
                <Button
                    color="#3147E4"
                    title="Save"
                    onPress={() => {
                        dispatch({
                            type: user.id ? 'updateUser' : 'createUser',
                            payload: user,
                        });
                        navigation.goBack();
                    }}
                />
            </ScrollView>
        </SafeAreaView>
    );
};
