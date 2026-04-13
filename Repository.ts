import AsyncStorage from '@react-native-async-storage/async-storage';
import AetherService from '../services/AetherService';

export const ProjectRepository = {
  /**
   * Smart Load: Tries to get the latest from cloud, falls back to local.
   */
  async getProjectContent(projectId: string) {
    try {
      // 1. Check local cache first for speed
      const cached = await AsyncStorage.getItem(`@project_${projectId}`);
      
      // 2. Fetch from Cloud in the background
      const remote = await AetherService.atomicSync(projectId, null); // Null code = fetch only
      
      if (remote && remote.Code) {
        await AsyncStorage.setItem(`@project_${projectId}`, remote.Code);
        return remote.Code;
      }
      
      return cached || "// Start coding...";
    } catch (e) {
      console.warn("Offline mode active.");
      return await AsyncStorage.getItem(`@project_${projectId}`);
    }
  }
};
