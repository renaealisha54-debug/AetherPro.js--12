// services/StorageService.js
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StorageService = {
  async save(key, value) {
    if (Platform.OS === 'web') {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    }
  },

  async load(key) {
    if (Platform.OS === 'web') {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } else {
      const data = await AsyncStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    }
  }
};

export default StorageService;
