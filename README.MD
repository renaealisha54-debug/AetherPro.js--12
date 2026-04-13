AetherPro: The Native Engine & Cloud Vault 💎
​AetherPro is the "Tier 3" flagship environment. It serves as the master coordination layer for the ecosystem, providing high-level deployment, native device access, and cloud synchronization.
​📁 Core File Roles
​App.js: The main engine entry point managing state and editor integration.
​AetherService.js: Orchestrates atomicSync (delta upserts to Baserow) and hardwareBridge (Expo FS interactions).
​ProjectRepository.js: Manages the data access layer, handling local caching vs. remote cloud fetching.
​BuildPanel.js: A specialized dashboard for managing native exports and deployment logs.
​🚀 Technical Profile
​Target: Power users and production-ready deployments.
​Key Feature: "Hardware Bridge" for exporting logic directly to mobile storage.
​Persistence: Direct integration with Baserow DB and Native File Systems.
