/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useContext } from 'react';
import { StyleSheet, FlatList, Text, View, Button, Icon, ListItem } from 'react-native';
import UserContext from '../../contexts/User';

const styles = StyleSheet.create({
    head: {
        color: '#000',
    },
    text: {
        color: '#666',
        marginBottom: 12,
    },
});

export default (props) => {
    const { state } = useContext(UserContext);

    function getUserItem({ item: user }) {
        return (
            <ListItem key={user.id} bottomDivider onPress={() => props.navigation.navigate('UserForm', user)}>
                <ListItem.Content>
                    <ListItem>
                        <Text style={styles.head}>Name</Text>
                        <Text style={styles.text}>{user.name}</Text>
                    </ListItem>
                    <ListItem>
                        <Text style={styles.head}>Date of Birth</Text>
                        <Text style={styles.text}>{user.dob}</Text>
                    </ListItem>
                    <ListItem>
                        <Text style={styles.head}>Email</Text>
                        <Text style={styles.text}>{user.email}</Text>
                    </ListItem>
                    <ListItem>
                        <Text style={styles.head}>Phone Number</Text>
                        <Text style={styles.text}>{user.phone}</Text>
                    </ListItem>
                    <ListItem>
                        <Text style={styles.head}>Address where impacted</Text>
                        <Text style={styles.text}>{user.address}</Text>
                    </ListItem>
                    <ListItem>
                        <Text style={styles.head}>FEMA Number</Text>
                        <Text style={styles.text}>{user.fema}</Text>
                    </ListItem>
                    <ListItem>
                        <Text style={styles.head}>Social Security Number</Text>
                        <Text style={styles.text}>{user.ssn}</Text>
                    </ListItem>
                </ListItem.Content>
                <Button
                    onPress={() => {
                        props.navigation.navigate('UserForm', user);
                    }}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="#9e9e9e" />}
                />
            </ListItem>
        );
    }

    return (
        <View>
            <FlatList keyExtractor={(user) => user.id.toString()} data={state.users} renderItem={getUserItem} />
        </View>
    );
};
