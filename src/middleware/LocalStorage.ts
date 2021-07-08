import AsyncStorage from '@react-native-async-storage/async-storage';

export default class LocalStorage {
    static async getItem(key: string): Promise<any> {
        return AsyncStorage.getItem(`${key}`).then((json: any) => {
            if (typeof json === 'object') {
                return JSON.parse(json);
            }
            return json;
        });
    }

    static async setItem(key: string, value: any): Promise<void> {
        return AsyncStorage.setItem(`${key}`, JSON.stringify(value));
    }

    static async deleteItem(key: string): Promise<void> {
        return AsyncStorage.removeItem(`${key}`);
    }
}
