import AsyncStorage from '@react-native-async-storage/async-storage';
import * as FileSystem from 'expo-file-system'; // If using Expo, or use react-native-fs

class AetherService {
  constructor() {
    this.baseUrl = 'https://api.baserow.io/api/database/rows/table/'; 
    this.token = 'YOUR_BASEROW_TOKEN';
  }

  /**
   * atomicSync: Handles "Delta Upserts"
   * Instead of sending the whole file, it prepares the data for the backend.
   */
  async atomicSync(projectId, codeData) {
    try {
      console.log('Initiating Atomic Sync for:', projectId);
      
      const response = await fetch(`${this.baseUrl}${projectId}/?user_field_names=true`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Token ${this.token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "Code": codeData,
          "LastUpdated": new Date().toISOString(),
        }),
      });

      return await response.json();
    } catch (error) {
      console.error('Sync Failed:', error);
      // Fallback: Save locally if cloud sync fails
      await AsyncStorage.setItem(`@offline_${projectId}`, codeData);
    }
  }

  /**
   * hardwareBridge: Accesses the physical device storage
   * Allows "Pro" users to export their scripts as actual .js files.
   */
  async hardwareBridge(fileName, content) {
    const fileUri = FileSystem.documentDirectory + fileName;
    try {
      await FileSystem.writeAsStringAsync(fileUri, content, {
        encoding: FileSystem.EncodingType.UTF8,
      });
      console.log('Hardware Bridge: File saved to', fileUri);
      return fileUri;
    } catch (e) {
      console.error('Hardware Bridge Error:', e);
    }
  }
}

export default new AetherService();
