/**
 * RemoteConfig.js - Quản lý cấu hình từ xa và bảo mật link cho Dạ Hành Studio
 */

const OBFUSCATED_URL = "aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2xlbnpjb212dGgvZGEtaGFuaC1jb25maWcvbWFpbi8="; // Base64 của link gốc

class RemoteConfig {
    static getBaseUrl() {
        return atob(OBFUSCATED_URL);
    }

    /**
     * Kiểm tra phiên bản và tải cấu hình mới
     */
    static async checkAndUpdate() {
        try {
            const baseUrl = this.getBaseUrl();
            const response = await fetch(`${baseUrl}version.json?t=${Date.now()}`);
            const remoteVersion = await response.json();

            const localData = await chrome.storage.local.get(['config_version']);
            const currentVersion = localData.config_version || "0.0.0";

            if (this.isNewer(remoteVersion.version, currentVersion)) {
                console.log(`[Dạ Hành Studio] Phát hiện phiên bản mới: ${remoteVersion.version}. Đang cập nhật...`);
                await this.syncConfigs(baseUrl);
                await chrome.storage.local.set({ 'config_version': remoteVersion.version });
                return { success: true, version: remoteVersion.version };
            }
            return { success: false, message: "Đang sử dụng phiên bản mới nhất" };
        } catch (error) {
            console.error("[Dạ Hành Studio] Lỗi kiểm tra cập nhật:", error);
            return { success: false, error: error.message };
        }
    }

    static async syncConfigs(baseUrl) {
        const files = ['setting-config.json', 'news-popup-config.json', 'vi.json'];
        for (const file of files) {
            const res = await fetch(`${baseUrl}${file}?t=${Date.now()}`);
            const data = await res.json();
            const storageKey = `remote_${file.replace('.json', '')}`;
            await chrome.storage.local.set({ [storageKey]: data });
            console.log(`[Dạ Hành Studio] Đã đồng bộ: ${file}`);
        }
    }

    static isNewer(remote, local) {
        const r = remote.split('.').map(Number);
        const l = local.split('.').map(Number);
        for (let i = 0; i < 3; i++) {
            if (r[i] > l[i]) return true;
            if (r[i] < l[i]) return false;
        }
        return false;
    }
}

export default RemoteConfig;
