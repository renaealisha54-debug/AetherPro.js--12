// AetherPro.js logic snippet
const [mode, setMode] = useState('sketch'); // 'sketch' | 'script' | 'pro'

const handleSave = async (content) => {
    switch(mode) {
        case 'sketch':
            // Fast, local-only save
            await StorageService.save('@sketch_pad', content);
            break;
        case 'script':
            // Standard save
            await StorageService.save('@aether_code', content);
            break;
        case 'pro':
            // High-level: Save locally AND sync to Baserow/Hardware
            await StorageService.save('@aether_code', content);
            await AetherService.atomicSync(content);
            break;
    }
};
